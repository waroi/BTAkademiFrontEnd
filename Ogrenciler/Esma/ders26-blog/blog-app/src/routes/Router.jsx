import React from 'react'
import HomeView from '../views/HomeView'
import HakkindaView from '../views/HakkindaView'
import BlogView from '../views/BlogView'
import { useRoutes, Navigate } from 'react-router-dom'
import PostBlogView from '../views/PostBlogView'

const Router = () => { 
    const routes = useRoutes(
        [
            {path:"/", element:<HomeView/>},

            {path:"/blog", element:<BlogView/>, children:[{path:"/blog/blog-post", element:<PostBlogView/>}]},
            {path:"/hakkinda", element:<HakkindaView/>}
        ]
    )
  return routes;
}

export default Router
