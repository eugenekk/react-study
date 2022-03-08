import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from '../components/ErrorBoundary';

const Nav = styled.nav`
    height : 100px;
    background-color : skyblue;
`

const Main = styled.main`
    display: flex;
`

const SideMenu = styled.div`
    min-width : 300px;
    min-height : 400px;
    border : 1px solid grey;
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
                <SideMenu>사이드 메뉴</SideMenu>
                <Content>
                    {/* 에러바운더리 감싸기 */}
                    <ErrorBoundary> 
                        {/* 각각 컴포넌트들이 보여질 곳 Outlet으로 받아줌 */}
                        <Outlet/>
                    </ErrorBoundary>
                </Content>
            </Main>
        </>
    )
}