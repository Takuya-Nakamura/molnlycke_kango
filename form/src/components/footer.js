
import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer-info">
                    <p class="company">メンリッケヘルスケア株式会社</p>
                    <p class="sub-text">東京都新宿区西新宿6-20-7</p>
                    <p class="sub-text">コンシェリア西新宿タワーズウエスト</p>
                    <p class="sub-text">TEL：03-6914-5004</p>

                    <p class="sub-text yakuji_id">MHCJPWC-202011-02</p>
                </div>
                <div class="footer-logo">
                    <img src="./images/logo2.png" alt="" />
                </div>
            </footer>
        );
    }
}    
