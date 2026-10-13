"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // Cal.com inline embed code bootstrap
    type CalApi = {
      (...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, CalApi>;
      q?: unknown[][];
      config?: Record<string, unknown>;
    };

    (function (C: Window & { Cal?: CalApi }, A: string, L: string) {
      const p = (a: CalApi, ar: unknown[]) => { (a.q ??= []).push(ar); };
      const d = C.document;
      C.Cal = C.Cal || (function (...ar: unknown[]) {
        const cal = C.Cal as CalApi;
        if (!cal.loaded) {
          cal.ns ??= {};
          cal.q ??= [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: CalApi = Object.assign((...args: unknown[]) => p(api, args), { q: [] });
          const namespace = ar[1];
          if (typeof namespace === "string") {
            cal.ns ??= {};
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      }) as CalApi;
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize the calendar widget with your unique namespace and configuration
    const cal = (window as Window & { Cal?: CalApi }).Cal!;
    cal("init", "asva-development-centre", { origin: "https://app.cal.com" });
    
    const calInstance = cal;
    calInstance.config = calInstance.config || {};
    calInstance.config.forwardQueryParams = true;

    calInstance.ns!["asva-development-centre"]("inline", {
      elementOrSelector: "#my-cal-inline-asva-development-centre",
      config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
      calLink: "asva-abuad-sg3hjd/asva-development-centre",
    });

    calInstance.ns!["asva-development-centre"]("ui", { 
      "hideEventTypeDetails": false, 
      "layout": "month_view" 
    });
  }, []);

  return (
    <div 
      style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }} 
      id="my-cal-inline-asva-development-centre" 
    />
  );
}