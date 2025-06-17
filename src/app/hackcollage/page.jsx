'use client';
import MetaTags from '@/components/MetaTags';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

const accordionData = [
  {
    title: 'Security Creator YouTube Channel List',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://securitycreators.video/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Security Creators Video
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/TheCyberMentor/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Cyber Mentor
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/user/TomNomNomDotCom/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              TomNomNom
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/STOKfredrik/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              STOK
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/StephenOgu/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Stephen Ogu
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/B3nacSec/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              B3nacSec
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/CristiVladZ/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cristi Vlad
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/Nahamsec/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              NahamSec
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCq9IyPMXiwD8yBFHkxmN8zg'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Security Now
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCjQHiY2JeOkBamHSg_6UeFw'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              HackerSploit
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/user/RapidBug'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              RapidBug
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'OSCP Video Tutorial',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://www.youtube.com/c/ippsec/videos'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              IPPSec YouTube Channel
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Bug Bounty Cheat Sheet Useful Resource',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html'
              className='text-blue-500 hover:underline Hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              M0chan Bug Bounty Cheat Sheet
            </a>
          </li>
          <li>
            <a
              href='https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Infosecmatter Bug Bounty Tips
            </a>
          </li>
          <li>
            <a
              href='https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              NahamSec Resources for Beginners
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Online Practical Hacking Platform & CTF Challenges',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://www.vulnhub.com/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              VulnHub
            </a>
          </li>
          <li>
            <a
              href='https://www.hackthebox.eu/login'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hack The Box
            </a>
          </li>
          <li>
            <a
              href='https://pentesterlab.com/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              PentesterLab
            </a>
          </li>
          <li>
            <a
              href='https://portswigger.net/web-security'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              PortSwigger Web Security
            </a>
          </li>
          <li>
            <a
              href='https://tryhackme.com/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              TryHackMe
            </a>
          </li>
          <li>
            <a
              href='https://hackersploit.org/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              HackerSploit
            </a>
          </li>
          <li>
            <a
              href='https://ctf.hacker101.com/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacker101 CTF
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Another Useful List',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://pentester.land/list-of-bug-bounty-writeups.html'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pentester.land Bug Bounty Writeups
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/@shivamrawat_756/best-websites-for-getting-started-with-ctf-64307f9f8d02'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Best Websites for CTF Beginners
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Beginners and Advance Corner',
    content: (
      <div>
        <h3 className='font-semibold text-lg mb-3 text-gray-800'>
          Medium to Advanced
        </h3>
        <ul className='list-disc pl-6 space-y-3'>
          <li>Abusing SSRF on Selenium Grid</li>
          <li>
            Abusing Application Layer Gateways (NAT Slipstreaming) & New PoC
          </li>
          <li>Machine Learning Attack Series: Overview</li>
          <li>Building C2 Implants in C++: A Primer</li>
          <li>Weaponizing Windows Sandbox To Bypass Defender</li>
        </ul>
        <h3 className='font-semibold text-lg mt-4 mb-3 text-gray-800'>
          Beginners Corner
        </h3>
        <ul className='list-disc pl-6 space-y-3'>
          <li>Hacking into an AWS Account – Part 2: Jenkins</li>
          <li>Hacking into an AWS Account – Part 3: Kubernetes</li>
          <li>Introducing Monsoon ‒ A Lean And Versatile HTTP Enumerator</li>
          <li>Simple Recon Methodology</li>
          <li>CSP bypasses, and how developers can build a strict CSP!</li>
          <li>State of the art of network pivoting in 2019</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Hacking Books – Beginner to Advanced',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://amzn.to/2ObGqkU'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Hackers Playbook 2 by Peter Kim
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2QJ0s7Y'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Hackers Playbook 3 by Peter Kim
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2wjKDwy'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Real-World Bug Hunting by Peter Yaworski
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/35wpI5z'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rtfm: Red Team Field Manual by Ben Clark
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/34dvTee'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacking: The Art of Exploitation, 2nd Edition by Jon Erickson
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/34cAE86'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Web Application Hacker’s Handbook by Dafydd Stuttard & Marcus
              Pinto
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2ObXpDu'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Penetration Testing: A Hands-On Introduction to Hacking by Georgia
              Weidman
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2qFEKaf'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Kali Linux Revealed by Raphael Hertzog & Jim O’ Gorman
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/33f0DKx'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ghost in the Wires by Kevin Mitnick
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2rgmKmR'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Advanced Penetration Testing by Will Allsopp
            </a>
          </li>
          <li>
            <a
              href='https://amzn.to/2D6ojWX'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacking MIT Metasploit by Michael Messner (Honorable Mention)
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Hacking Tools and Methodology',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://book.hacktricks.xyz/pentesting-methodology?s=08'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              HackTricks Pentesting Methodology
            </a>
          </li>
          <li>
            <a
              href='https://book.hacktricks.xyz/external-recon-methodology?s=08'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              HackTricks External Recon Methodology
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Z4nzu/hackingtool'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Z4nzu Hacking Tool
            </a>
          </li>
          <li>
            <a
              href='https://github.com/dafthack/CloudPentestCheatsheets'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              CloudPentestCheatsheets by Dafthack
            </a>
          </li>
          <li>
            <a
              href='https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              M0chan Bug Bounty Cheat Sheet
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Hacking Telecom Network Write Up',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-1-getting-the-rce-167c2bb320e6'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              How I Hacked into a Telecom Network - Part 1
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-2-playing-with-tunnels-tcp-tunneling-b4cef2837938'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Part 2: Playing with Tunnels - TCP Tunneling
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-3-playing-with-tunnels-stealthy-ssh-dynamic-tunnels-5ac26557d0eb'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Part 3: Stealthy SSH Dynamic Tunnels
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-4-getting-access-to-cdrs-ss7-applications-vlrs-9a8cf95e2648'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Part 4: Accessing CDRs, SS7 Applications, VLRs
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/@afolicdaralee/hacking-a-telecommunication-company-mtn-c46696451fed'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hacking a Telecommunication Company - MTN
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Courses and Certifications',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='https://www.offensive-security.com/courses-and-certifications/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Offensive Security Courses and Certifications
            </a>
          </li>
          <li>
            <a
              href='https://elearnsecurity.com/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              eLearnSecurity
            </a>
          </li>
          <li>
            <a
              href='https://www.eccouncil.org/programs/'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              EC-Council Programs
            </a>
          </li>
          <li>
            <a
              href='https://www.isc2.org/Certifications'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              ISC2 Certifications
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Mobile Hacking Write Up & Presentation',
    content: (
      <div>
        <ul className='list-disc pl-6 space-y-3'>
          <li>
            <a
              href='http://www.nuckingfoob.me/android-webview-csp-iframe-sandbox-bypass/index.html'
              className='text-blue-500 hover:underline hover:text-blue-600 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              Android WebView CSP Iframe Sandbox Bypass
            </a>
          </li>
          <li>Insecurity Through Obscurity - w/Nerdwell</li>
          <li>
            Pedro Umbelino | Joao Morais - Android Bug Foraging - DEF CON 28SM
            AppSec Village
          </li>
          <li>
            Android Application Exploitation - DEF CON Safe Mode Red Team
            Village
          </li>
        </ul>
      </div>
    ),
  },
];

export default function HackCollage() {
  useEffect(() => {
    gsap.from('.fade-in', {
      opacity: 100,
      y: 60,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className='font-sans'>
      <MetaTags page='hackcollage' />

      {/* Hero Section */}
      <div
        className='bg-white w-full h-[110vh] flex justify-center items-center bg-no-repeat bg-top-left'
        style={{ backgroundImage: "url('/Rectangle 10216.png')" }}
      >
        <div className='fade-in px-4  max-w-7xl w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Text Section */}
            <div className='text-left'>
              <h1 className='text-[#292F43] mt-24 lg:mt-0 text-4xl  font-bold tracking-tight'>
                HACK COLLAGE
              </h1>
              <p className='text-gray-600 pt-6 lg:pr-16 text-base  leading-relaxed'>
                There is a common saying that goes this way <br />
                <span className='font-semibold'>
                  we see far when we stand on the shoulders of giants
                </span>{' '}
                <br />
                At Teklabspace, we build on decades of technological evolution
                to deliver face verification solutions that are smarter, faster,
                and more secure than ever before. Our system uses cutting-edge
                AI and deep learning to verify identities in real-time,
                protecting your platform from fraud, impersonation, and
                unauthorized access. From financial services to healthcare to
                e-commerce, our face verification technology adapts to your
                industry needs with high precision and minimal friction.
              </p>
            </div>
            {/* Image Section */}
            <div className='flex justify-center'>
              <img
                src='https://pub-28a9918c538a4d75b0983315d5bdad75.r2.dev/hack%20college.gif'
                alt='Security research animation'
                className='w-full max-w-sm lg:max-w-md h-auto rounded-xl shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div
        className=' sm:mx-8 lg:mx-16 my-20 max-w-6xl mx-auto bg-white rounded-xl  overflow-hidden border border-gray-200
      '
        style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
      >
        <div className='bg-gradient-to-r from-[#292F43] to-[#3b4563] py-4 px-6 flex items-center'>
          <img src='/bugicon.svg' alt='Bug Icon' className='w-8 h-8' />
          <h2 className='text-white text-xl font-semibold ml-4'>
            Cybersecurity Resources
          </h2>
        </div>
        {accordionData.map((item, index) => (
          <div key={index} className='border-b border-gray-200 last:border-b-0'>
            <button
              onClick={() => toggleIndex(index)}
              className='flex justify-between items-center w-full px-6 py-5 text-left hover:bg-gray-50 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5'
            >
              <span className='font-semibold text-gray-800 text-base lg:text-lg'>
                {item.title}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className='text-xl font-bold text-gray-600'
              >
                +
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key='content'
                  initial='collapsed'
                  animate='open'
                  exit='collapsed'
                  variants={{
                    open: { opacity: 1, height: 'auto', marginBottom: 16 },
                    collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className='px-8 pb-6 text-gray-700 text-sm lg:text-base leading-relaxed'
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
