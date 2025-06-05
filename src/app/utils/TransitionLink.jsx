'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../globals.css';

function TransitionLink({ children, href, ...props }) {
  const router = useRouter();

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const handleTransition = async e => {
    e.preventDefault();

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    overlay.innerHTML = `
      <div class="transition-line line-1"></div>
      <div class="transition-line line-2"></div>
      <div class="transition-line line-3"></div>
      <div class="transition-line line-4"></div>
    `;
    document.body.appendChild(overlay);

    // Trigger entrance animation
    await sleep(10); // Minimal delay for DOM update
    overlay.classList.add('active');

    // Start navigation immediately after entrance animation starts
    router.push(href);

    // Wait for entrance animation to complete
    await sleep(700); // 400ms transition + 300ms for delays

    // Trigger exit animation
    overlay.classList.remove('active');
    overlay.classList.add('exiting');

    // Wait for exit animation to complete
    await sleep(400); // 400ms for exit transition

    // Clean up
    document.body.removeChild(overlay);
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}

export default TransitionLink;
