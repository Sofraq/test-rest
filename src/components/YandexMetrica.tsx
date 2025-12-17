import { useEffect } from 'react';

const YandexMetrica = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="mc.yandex.ru/metrika"]');
    if (existingScript) return;

    // Initialize Yandex Metrika
    (function(m: any, e: Document, t: string, r: string, i: string, k?: HTMLScriptElement, a?: HTMLScriptElement) {
      m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * (new Date() as any);
      for (let j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) { return; }
      }
      k = e.createElement(t) as HTMLScriptElement;
      a = e.getElementsByTagName(t)[0] as HTMLScriptElement;
      k.async = true;
      k.src = r;
      a.parentNode?.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=105889245', 'ym');

    // Initialize counter
    const ym = (window as any).ym;
    if (ym) {
      ym(105889245, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: 'dataLayer',
        accurateTrackBounce: true,
        trackLinks: true
      });
    }

    // Add noscript pixel
    const noscript = document.createElement('noscript');
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'https://mc.yandex.ru/watch/105889245';
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    div.appendChild(img);
    noscript.appendChild(div);
    document.body.appendChild(noscript);

    return () => {
      noscript.remove();
    };
  }, []);

  return null;
};

export default YandexMetrica;