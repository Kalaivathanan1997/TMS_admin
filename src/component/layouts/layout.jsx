import React from 'react'
import Header from './header'
import SideNav from './sidenav'
import Rightbar from './rightbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div id="layout-wrapper">
                <Header></Header>
                <SideNav></SideNav>
                <div class="main-content">
                    <Outlet />
                    <Footer></Footer>
                </div>

            </div>

            <Rightbar></Rightbar>
        </div>
    )
}

export default Layout