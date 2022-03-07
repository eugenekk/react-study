import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav``

const Main = styled.main`
    display: flex;
`

const SideMenu = styled.div`
    min-width : 300px;
    background-color: red;
`

const Content = styled.div``

export default function Layout() {
    return (
        <>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">Users</NavLink>
            </Nav>
            <Main>
                <SideMenu></SideMenu>
                <Content>
                    {/* 각각 컴포넌트들이 보여질 곳 Outlet으로 받아줌 */}
                    <Outlet/>
                </Content>
            </Main>
        </>
    )
}