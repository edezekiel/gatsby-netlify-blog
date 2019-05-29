import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <article>
      <h2>About Me</h2>
      <p>
        My name is Ed Ezekiel. I am a web developer and I recently graduated
        from Flatiron's immersive software engineering bootcamp in Atlanta. This
        blog is about programming, web development, and my journey from
        practicing law to loving code.
      </p>

      <p>
        I grew up in Maryland and my wife is from Memphis, TN. When I'm not
        programming, I'm probably cheering on the Memphis Grizzlies with my wife
        Farley, or playing with my dogs Buddy and Grace.
      </p>

      <h2>Programming</h2>
      <p>
        My passion for coding began when I was working at UnitedLex. I managed
        document review projects involving millions of files. In order to
        streamline my workflow, I picked up computer skills like performing
        advanced database queries, writing excel programs, and creating virtual
        workspaces.
      </p>

      <p>
        I discovered macros, Visual Basic, and keyboard shortcuts that seemed
        like magic. Excel programming and querying was fun, but I became curious
        about the broader field of programming. Over the next two years I took
        more online lessons, learned bits about computer science, and started
        looking into bootcamps.
      </p>

      <p>
        In 2018, I ran into Flatiron's free online Coding Bootcamp Prep Course.
        I decided to follow my passion and I have been completely hooked on web
        development ever since.
      </p>
    </article>
  </Layout>
)

export default AboutPage
