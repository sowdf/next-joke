import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';

export default class extends React.Component{
    static async getInitialProps({req}){
        const res = await fetch('http://localhost:3001/api/joke-cold?page=1');
        const json = await res.json();
        let {code,message,result:{list}} = json;
        return {list : list}
    }
    render() {
        let {list} = this.props;
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/css/style.css"/>
                    <script src="/static/js/reset.js"></script>
                </Head>
                <ul className="m_list">
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item.content}</li>
                        })
                    }
                    <li className="loading">加载更多......</li>
                </ul>
            </div>
        )
    }

}