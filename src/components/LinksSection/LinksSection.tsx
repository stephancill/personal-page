import React from "react"

interface ILinksSectionProps {
  links: {
    title: string
    username: string
    link: string
  }[]
}

export const LinksSection = ({ links }: ILinksSectionProps) => {
  return (
    <div>
      <div style={{ fontWeight: "500", marginBottom: "15px" }}>Links</div>
      <div>
        {links.map(({ title, username, link }, index) => {
          return (
            <div key={index} style={{ display: "flex", paddingBottom: "15px" }}>
              <div
                style={{
                  maxWidth: "200px",
                  minWidth: "100px",
                  width: "10vw",
                  color: "rgba(49, 49, 49, 0.8)",
                  flexShrink: "0",
                }}
              >
                {title}
              </div>
              <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {username}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
