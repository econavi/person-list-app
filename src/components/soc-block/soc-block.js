import React from 'react'

import './soc-block.css'

const SocBlock = () => {
  return (
    <div className="soc-block">
      <ul className="social-list w-list-unstyled">
        <li className="social-item">
          <a href="https://vk.com/netologygroup" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
            <img src="https://assets.website-files.com/5b48b41ec57559774ed7eb07/5b4c87632d24ef34d247bb0a_vk.svg" alt="" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.youtube.com/user/netologygroup" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
            <img src="https://assets.website-files.com/5b48b41ec57559774ed7eb07/5b4c87d6d95543eb941cce54_youtube.svg" alt="" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://instagram.com/netologygroup/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
            <img src="https://assets.website-files.com/5b48b41ec57559774ed7eb07/5b4c87e4abad38d260ba6db1_insta.svg" alt="" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.facebook.com/netologygroup" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
            <img src="https://assets.website-files.com/5b48b41ec57559774ed7eb07/5b4c8803abad383a28ba6e25_fb.svg" alt="" />
          </a>
        </li>
      </ul>
      <p>© Нетология-групп, 2011‐2019</p>
    </div>
  )
}

export default SocBlock
