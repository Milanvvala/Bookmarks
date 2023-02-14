import React from 'react'
import '../utils/custom.css'


const BuildWith = () => {
  const tools = ['html5', 'css3', 'javascript', 'react', 'reactrouter', 'nodedotjs', 'dotenv', 'bootstrap', 'jsonwebtokens', 'express', 'nodemon', 'mongodb', 'vite', 'npm', 'pnpm']
  return (<>
    <div>BuildWith</div><div className='grid' id='bw'>
      {
        tools.map((e) => {
          return (<div key={crypto.randomUUID()}>
            <article id='bwcard'>
              <img height="32" width="32" src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${e}.svg`} />
            </article>
          </div>)
        })
      }
    </div>
    <article>
      Other Tools : PicoCSS, Bcrypt Js , Mongoose, Express Validator Package, Html-Meta-Parcer Package
    </article>
  </>
  )
}

export default BuildWith