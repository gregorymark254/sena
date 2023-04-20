import React from 'react'
import { FaFacebookF,FaTwitter,FaPinterestP,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-between">
            <div className="p-4 space-y-3">
              <h4>About Website</h4>
              <p>He oppose at thrown desire of no. Announcing <br />impression unaffected day his are unreserved <br /> indulgence. Him hard find read are you</p>
            </div>
            <div className="p-4 space-y-3">
              <h4>Links</h4>
              <p>Important: Terms & Conditions, Privacy Policy</p>
              <p>Useful: Colorpicker, Icon Library, Illustrations</p>
              <p>Menu: Home, Details, Services, Contact</p>
            </div>
            <div className="p-4 text-left space-y-3 md:text-right">
              <div className="flex space-x-5">
                <h4><FaFacebookF/></h4>
                <h4><FaTwitter/></h4>
                <h4><FaPinterestP/></h4>
                <h4><FaInstagram/></h4>
              </div>
              <p>We would love to hear from you</p>
              <p>contact@site.com</p>
            </div>
          </div>
          <div className="text-center p-4 mt-4">
            <h6>Copyright &copy; By Gregory Mark.</h6>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
