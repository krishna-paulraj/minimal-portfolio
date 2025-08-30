import React from "react";

import { SOCIAL_LINKS } from "@/data/social-links";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <div>
      <div className="mt-5 border-t pt-5">
        <h2 className="sr-only">Social Links</h2>


        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SOCIAL_LINKS.map((link, index) => {
              return <SocialLinkItem key={index} {...link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}