import React from 'react';

import Icon1 from '../Asset/images/front-end.png'
import Icon2 from '../Asset/images/spring.png'
import Icon3 from '../Asset/images/datascience.png'
import Icon4 from '../Asset/images/fullstack-icon.png'

import './main.css';
import Banner from './Banner';
import FrontCarousel from './FrontCarousel';
import Footer from './Footer';
import Header from './Header';
import { BorderBottom } from '@mui/icons-material';


function Main(){
    return(
        <div>
            {/* 해더 */}
            <Header/>
            {/*배너*/}

            <Banner/>

            {/* 검색 */}
            <div className="search_container4">
                <div className="search_container_content4">
                    <h3>Happy에서 가치를 높이세요</h3>
                    <div className="search_wrapper4">
                        <input type="text" className="m_search_input4" maxLength={20} placeholder="배우고 싶은 지식을 검색하세요"/>
                        <button className="m_search_input_submit4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#2779cc"><path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* 아이콘 목록 */}
            <div className="lecture_icon_list4">
                <div className="icon_list_wrapper4">
                    <ul>
                        <li>
                            <div className="icon_list_card4">
                                <a href= "#">
                                    <img src={Icon1} alt="" className="course_icon4"/>
                                    <p className="img_title4">#프론트엔드</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon2} alt="" className="course_icon4"/>
                                    
                                        <p className="img_title4">#백엔드</p>
                                    
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon3} alt=""  className="course_icon4"/>
                                    
                                        <p className="img_title4" >#데이터베이스</p>
                                    
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="icon_list_card4">
                                <a href="#">
                                    <img src={Icon4} alt=""  className="course_icon4"/>
                                    
                                        <p className="img_title4">#풀스텍</p>
                                    
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 강의 목록 */}
            
            {/* 프론트엔드 */}
            <FrontCarousel/>
            
            {/* 백엔드 */}
            <FrontCarousel/>
            
            {/* 데이터베이스 */}
            <FrontCarousel/>
            
            {/* 풀스텍 */}
            <FrontCarousel/>
            
            {/* footer */}
            <Footer/>
        </div>
    );
}

export default Main;