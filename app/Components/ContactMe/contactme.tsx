import React from 'react'
import Card from './card'
import Icon from './iconcard'
import {  RiGoogleFill, RiPhoneFill, RiMapPinFill, RiGithubFill, RiGitlabFill, RiLinkedinBoxFill, RiSendPlaneFill } from '@remixicon/react';


function ContactMe() {
  return (
    <section id="contactme" className="min-h-screen scroll-mt-24 pb-20">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>

      <div className="w-[80%] mx-auto pt-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto min-h-full">

          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold">Let's Connect</h4>
            <p className="text-sm text-(--gray) text-justify pb-4">
              Whether you have a question, want to discuss a project, collaborate on something exciting, or 
              just want to say hi, feel free to reach out. I look forward to hearing from you!
            </p>

            <Card 
            icon={<RiGoogleFill/>}
            label="Email"
            value="porrasmica15@gmail.com"
            href="mailto:porrasmica15@gmail.com"
            />

            <Card 
            icon={<RiPhoneFill/>}
            label="Phone Number"
            value="09998471102"
            href="tel:09998471102"
            />

            <Card 
            icon={<RiMapPinFill/>}
            label="Location"
            value="Rodriguez, Rizal"
            href="/"
            />

            <h4 className="text-xl font-semibold pt-4">Follow Me</h4>
            <div className="flex flex-row gap-2 items-center">
              <Icon 
              icon={<RiGithubFill />}
              href="https://github.com/micaporras"
              />

              <Icon 
              icon={<RiGitlabFill />}
              href="https://gitlab.com/porrasmica15"
              />

              <Icon 
              icon={<RiLinkedinBoxFill />}
              href="https://www.linkedin.com/in/mica-lorraine-d-porras/"
              />
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-6 bg-(--white) rounded-md p-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@google.com" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Your Inquiry" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Your Message..." required />
                </div>
                <button type="submit" className="flex flex-row gap-4 justify-center items-center w-full bg-(--prim) text-(--white) py-2 text-sm rounded-md hover:opacity-80 transition-all duration-300 cursor-pointer">
                    <RiSendPlaneFill className="w-4 h-4"/> Send Message
                </button>
            </form>
            </div>

        </div>
      </div>
    </section>
  )
}

export default ContactMe