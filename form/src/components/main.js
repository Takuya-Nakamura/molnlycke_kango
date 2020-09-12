
import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="title">
                    <h1>第22回日本褥瘡学会学術集会 オンライン展示 特設サイト</h1>
                </div>
                <div className="key-image">
                    <img src="./images/foot.jpg" alt="" />
                </div>
                <div className="description">
                    メンリッケヘルスケア株式会社の特設サイトへようこそ！
                </div>

                <div className="form">

                    <form method="post">
                        <div className="form-item">
                            <label className="form-label">Q1:褥瘡を管理するうえで最も重要と考える点は何ですか。</label>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-1" value="1" required />
                                <label for="question1-1">滲出液吸収力</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-2" value="2" required />
                                <label for="question1-2">患者の快適性</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-3" value="3" required />
                                <label for="question1-3">ケアの簡便さ</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-4" value="4" required />
                                <label for="question1-4">ドレッシング材の貼付期間</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-5" value="5" required />
                                <label for="question1-5">トータルコスト</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-6" value="6" required />
                                <label for="question1-6">その他</label>
                            </div>
                            <input className="form-input hidden" type="text" name='control_other' placeholder="その他の方は詳細のご記入をお願い致します。" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">Q2:皮膚保護を行う際に重視する点を教えてください。</label>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question2" id="question2-1" value="1" required />
                                <label for="question2-1">ケアの簡便さ</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question2" id="question2-2" value="2" required />
                                <label for="question2-2">患者の快適性</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question2" id="question2-3" value="3" required />
                                <label for="question2-3">エビデンス</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question2" id="question2-4" value="4" required />
                                <label for="question2-4">トータルコスト</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question2" id="question2-5" value="5" required />
                                <label for="question2-5">その他</label>
                            </div>
                            <input className="form-input hidden" type="text" name='protect_other' placeholder="その他の方は詳細のご記入をお願い致します" />
                        </div>


                        <div className="form-item">
                            <label className="form-label">お名前<span className="require">＊</span></label>
                            <input className="form-input" type="text" name='name' required placeholder="お名前＊" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電子メール<span className="require">＊</span></label>
                            <input className="form-input" type="email" name='email' required placeholder="電子メール＊" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">ご職業<span className="require">＊</span></label>
                            <select name="jobs" className='form-select' placeholder="選択してください" required>
                                <option value="1">看護師</option>
                                <option value="2">皮膚排泄ケア認定看護師</option>
                                <option value="3">医師</option>
                                <option value="4">薬剤師</option>
                                <option value="5">栄養士</option>
                                <option value="6">学生</option>
                                <option value="7">その他</option>
                            </select>
                            <input className="form-input hidden" type="text" name='job_other' placeholder="その他の方は詳細のご記入をお願い致します＊" />
                        </div>



                        <div className="form-item">
                            <label className="form-label">ご住所<span className="require">＊</span></label>
                            <input className="form-input" type='text' maxlength="7" name='zip-code' required placeholder="郵便番号(数字のみでご入力ください)＊" onKeyUp="AjaxZip3.zip2addr(this,'','prefecture','city');" />


                            <input className="form-input" type='text' name='prefecture' required placeholder="都道府県＊" />
                            <input className="form-input" type='text' name='city' required placeholder="市区町村＊" />
                            <input className="form-input" type='text' name='address' required placeholder="番地＊" />
                            <input className="form-input" type='text' name='facility' required placeholder="ご所属施設名＊" />
                            <input className="form-input" type='text' name='department' required placeholder="ご所属（部門名、病棟など）＊" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">今後メンリッケヘルスケア株式会社からのセミナーや製品についてのご案内などをお受け取りになられることをご希望の場合は”はい”を選択して下さい。<span className="require">＊</span></label>

                            <div className="policy-wrapper">
                                <span className="form-radio-wrap">
                                    <input type="radio" name="notification" id="notification-1" value="1" />
                                    <label for="notification-1">はい</label>
                                </span>
                                <span className="form-radio-wrap">
                                    <input type="radio" name="notification" id="notification-2" value="2" />
                                    <label for="notification-2">いいえ</label>
                                </span>
                            </div>
                        </div>

                        <div className="form-item">
                            <div className="policy-wrapper">
                                <label className="form-label">Mölnlyckeの<a href="https://www.molnlycke.com/about-this-site/terms-of-use/" target="_blank">リーガル</a>と<a href="https://www.molnlycke.com/about-this-site/policies/" target="_blank">プライバシーポリシー</a>に同意致します。<span className="require">＊</span></label>

                                <input type="checkbox" name="policy" id="policy" className="checkbox" value="1" required />
                                <p className="policy-note" id="submit-note">
                                    Box 13080, Gamlestadvägen 3C, SE-40252 Göteborg, Sweden. Privacy Policy The Mölnlycke trademark, name and respective logo are registered globally to one or more of the Mölnlycke Health Care Group of Companies. © 2020 Mölnlycke Health Care AB. All rights reserved.
                                </p>
                            </div>
                        </div>


                        <input type='submit' className="btn" id="submit" value="送信" disabled />

                        <p className="submit-note" id="submit-note">
                            ※プライバシーポリシーに同意いただかないと送信出来ません。
                        </p>

                    </form>
                </div>
            </main>
        );
    }
}    
