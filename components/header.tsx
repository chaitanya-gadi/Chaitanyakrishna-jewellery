'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {  usePathname } from 'next/navigation';
import parse from 'html-react-parser';
// import Tooltip from './tool-tip';
import { onEntryChange } from '../contentstack-sdk';
import { getAllEntries, getHeaderRes } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { HeaderProps, Entry, NavLinks } from "../typescript/layout";
import CartIcon from './cart-icon';

export default function Header() {
  const [header, setHeaderProp] = useState<HeaderProps | undefined>(undefined);
  const [entries, setEntries] = useState<Entry | undefined>(undefined);
  const pathname = usePathname();
  const [getHeader, setHeader] = useState(header);

  const fetchHeaderAndEntries = async () => {
    const headerRes = await getHeaderRes();
    const entriesRes = await getAllEntries();
    setHeaderProp(headerRes);
    setEntries(entriesRes);
  }

  function buildNavigation(ent: Entry, hd: HeaderProps) {
    let newHeader={...hd};
    if (ent.length!== newHeader.navigation_menu.length) {
          ent.forEach((entry) => {
            const hFound = newHeader?.navigation_menu.find(
              (navLink: NavLinks) => navLink.label === entry.title
            );
            if (!hFound) {
              newHeader.navigation_menu?.push({
                label: entry.title,
                page_reference: [
                  { title: entry.title, url: entry.url, $: entry.$ },
                ],
                $:{}
              });
            }
          });
    }
    return newHeader
  }

  async function fetchData() {
    try {
      if (header && entries) {
      const headerRes = await getHeaderRes();
      const newHeader = buildNavigation(entries,headerRes)
      setHeader(newHeader);
    }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchHeaderAndEntries();
  }, []);

  useEffect(() => {
    if (header && entries) {
      onEntryChange(() => fetchData());
    }
  }, [header]);
  const headerData = getHeader ? getHeader : undefined;
  
  return (
    <header className='header'>
      <div className='note-div'>
        {headerData?.notification_bar.show_announcement ? (
          typeof headerData.notification_bar.announcement_text === 'string' && (
            <div {...headerData.notification_bar.$?.announcement_text as {}}>
              {parse(headerData.notification_bar.announcement_text)}
            </div>
          )
        ) : (
          <Skeleton />
        )}
      </div>
      <div className='max-width header-div'>
        <div className='wrapper-logo'>
          <Link href='/' className='logo-tag' title='KRISHNA JEWELLERY'>
            <span className='logo-text'>
              <span className='logo-icon'>💎</span>
              KRISHNA JEWELLERY
            </span>
          </Link>
        </div>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='navicon' />
        </label>
        <nav className='menu'>
          <ul className='nav-ul header-ul'>
            <li className='nav-li'>
              <Link href='/rings' className={pathname === '/rings' ? 'active' : ''}>
                Rings
              </Link>
            </li>
            <li className='nav-li'>
              <Link href='/necklaces' className={pathname === '/necklaces' ? 'active' : ''}>
                Necklaces
              </Link>
            </li>
            <li className='nav-li'>
              <Link href='/earrings' className={pathname === '/earrings' ? 'active' : ''}>
                Earrings
              </Link>
            </li>
            <li className='nav-li'>
              <Link href='/bracelets' className={pathname === '/bracelets' ? 'active' : ''}>
                Bracelets
              </Link>
            </li>
            <li className='nav-li'>
              <Link href='/chokers' className={pathname === '/chokers' ? 'active' : ''}>
                Chokers
              </Link>
            </li>
            <li className='nav-li'>
              <Link href='/pendants' className={pathname === '/pendants' ? 'active' : ''}>
                Pendants
              </Link>
            </li>
          </ul>
        </nav>

        <CartIcon />
      </div>
    </header>
  );
}