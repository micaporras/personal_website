import React from 'react'
import Socials from '../shared/Socials'
import {  RiGoogleFill, RiGithubFill, RiLinkedinBoxFill, RiFacebookFill, RiInstagramFill  } from '@remixicon/react';

function Footer() {
  return (
    <footer className="bg-(--body) drop-shadow-sm">
      <div className="flex flex-col items-center px-4 py-6 gap-4">
        <h3 className="font-extrabold text-xl">mclrrn</h3>
        <div className="flex gap-2">
          <Socials 
          icon={<RiFacebookFill />} 
          href="https://www.facebook.com/micalorraine015" 
          size={"small"}
          />

          <Socials 
          icon={<RiInstagramFill />} 
          href="https://www.instagram.com/_micalorraine" 
          size={"small"}
          />
          
          <Socials 
          icon={<RiGithubFill />} 
          href="https://github.com/micaporras" 
          size={"small"}
          />

          <Socials 
          icon={<RiGoogleFill/>} 
          href="mailto:porrasmica15@gmail.com" 
          size={"small"}
          />

          <Socials 
          icon={<RiLinkedinBoxFill />} 
          href="https://www.linkedin.com/in/mica-lorraine-d-porras/" 
          size={"small"}
          />
        </div>
        <p className="text-sm text-(--gray)">&copy;2026. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer