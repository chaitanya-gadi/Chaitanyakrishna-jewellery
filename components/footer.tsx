'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import { onEntryChange } from '../contentstack-sdk';
import { getAllEntries, getFooterRes } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { FooterProps, Entry, Links } from "../typescript/layout";

export default function Footer() {

  const [footer, setFooterProp] = useState<FooterProps | undefined>(undefined);
  const [entries, setEntries] = useState<Entry | undefined>(undefined);

  const [getFooter, setFooter] = useState(footer);
  
  function buildNavigation(ent: Entry, ft: FooterProps) {
    let newFooter = { ...ft };
    if (ent.length !== newFooter.navigation.link.length) {
      ent.forEach((entry) => {
        const fFound = newFooter?.navigation.link.find(
          (nlink: Links) => nlink.title === entry.title
        );
        if (!fFound) {
          newFooter.navigation.link?.push({
            title: entry.title,
            href: entry.url,
            $: entry.$,
          });
        }
      });
    }
    return newFooter;
  }

  const fetchFooterAndEntries = async () => {
    const footerRes = await getFooterRes();
    const entriesRes = await getAllEntries();
    setFooterProp(footerRes);
    setEntries(entriesRes);
  }

  async function fetchData() {
    try {
      if (footer && entries) {
        const footerRes = await getFooterRes();
        const newfooter = buildNavigation(entries, footerRes);
        setFooter(newfooter);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFooterAndEntries();
  }, []);

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [footer]);

  const footerData = getFooter ? getFooter : undefined;

  return (
    <footer className='krishna-footer'>
      <div className='max-width footer-div'>
        <div className='col-quarter'>
          <Link href='/' className='logo-tag footer-logo-link'>
            <span className='footer-logo-text'>
              <span className='footer-logo-icon'>💎</span>
              KRISHNA JEWELLERY
            </span>
          </Link>
          <p className='footer-tagline'>Timeless Elegance, Crafted for You</p>
        </div>
        <div className='col-half'>
          <nav>
            <ul className='nav-ul'>
              <li className='footer-nav-li'>
                <Link href='/rings'>Rings</Link>
              </li>
              <li className='footer-nav-li'>
                <Link href='/necklaces'>Necklaces</Link>
              </li>
              <li className='footer-nav-li'>
                <Link href='/earrings'>Earrings</Link>
              </li>
              <li className='footer-nav-li'>
                <Link href='/bracelets'>Bracelets</Link>
              </li>
              <li className='footer-nav-li'>
                <Link href='/chokers'>Chokers</Link>
              </li>
              <li className='footer-nav-li'>
                <Link href='/pendants'>Pendants</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-quarter social-link'>
          <div className='social-nav'>
            <a href='https://facebook.com' title='Facebook' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='https://instagram.com' title='Instagram' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='https://twitter.com' title='Twitter' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='https://pinterest.com' title='Pinterest' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-pinterest'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        © {new Date().getFullYear()} KRISHNA JEWELLERY. All Rights Reserved.
      </div>
    </footer>
  );
}