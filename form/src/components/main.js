
import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {

    render() {
        return (
            <main className="main">

                <div className="title">
                    <h1>第34回日本手術看護学会年次大会 Web開催 専⽤サイト</h1>
                </div>


                <div className="description">
                    <p>術中の皮膚保護にどの様に取り組んでおられますでしょうか？</p>

                    <p>昨今、術中における皮膚保護が大きく見直されてきております。</p>
                    <p>関連の資料をお送りさせて頂きますので、下記のフォームよりお申込み下さい。</p>
                </div>


                <div className="product-description" >
                    製品説明
                </div>

                <div className="form">
                    <form method="post">
                        <div className="form-item">
                            <label className="form-label">
                                メピレックス ボーダー プロテクトについて、さらに詳しくご説明いたします。<br />
                                フォームのご希望欄にチェックを⼊れていただき、必要事項を⼊⼒の上、送信ボタンをクリックしてください。後⽇、担当者よりご連絡いたします。
                            </label>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-1" value="1" required />
                                <label for="question1-1">説明会希望</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-2" value="2" required />
                                <label for="question1-2">デモ希望</label>
                            </div>
                            <div className="form-radio-wrap">
                                <input type="radio" name="question1" id="question1-3" value="3" required />
                                <label for="question1-3">製品について詳しく聞きたい</label>
                            </div>
                        </div>

                        <div className="form-item">
                            <label className="form-label">
                                メピレックス ボーダー プロテクトについて、さらに詳しい資料をお送りします。
                                資料送付のご希望を頂いた方にはギミックを差し上げます。
                            </label>
                            <div className="form-radio-wrap">
                                <input type="checkbox" name="question2" id="question2-1" value="1" required />
                                <label for="question2-1">資料送付希望</label>
                            </div>
                        </div>

                        <div className="description">
                            下記にご入力お願い致します。メンリッケからのご連絡、資料の送付に使わせて頂きます。（＊は必須項目です）
                        </div>

                        <div className="form-item">

                            <label className="form-label">お名前<span className="require">＊</span></label>
                            <input className="form-input" type="text" name='name' required placeholder="" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電子メール<span className="require">＊</span></label>
                            <input className="form-input" type="email" name='email' required placeholder="" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電話番号<span className="require">＊</span></label>
                            <input className="form-input" type="tel" name='tel' required placeholder="" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">施設名<span className="require">＊</span></label>
                            <input className="form-input" type='text' name='facility' required placeholder="" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">部署名<span className="require">＊</span></label>
                            <input className="form-input" type='text' name='department' required placeholder="" />
                        </div>



                        <div className="form-item">
                            <label className="form-label">ご住所<span className="require">＊</span></label>
                            <input className="form-input" type='text' maxlength="7" name='zip-code' required placeholder="郵便番号(数字のみでご入力ください)＊" onKeyUp="AjaxZip3.zip2addr(this,'','prefecture','city');" />

                            <input className="form-input" type='text' name='prefecture' required placeholder="都道府県＊" />
                            <input className="form-input" type='text' name='city' required placeholder="市区町村＊" />
                            <input className="form-input" type='text' name='address' required placeholder="番地＊" />
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

                                <p className="submit-note" >
                                    ※いいえを選択された場合でも、資料、ギミック発送のご連絡のため、ご希望されている場合はアポイント取得のためにE-mailでご連絡申し上げる場合がございます。
                                </p>

                            </div>
                        </div>

                        <div className="form-item">
                            <div className="policy-wrapper">
                                <label className="form-label">Mölnlyckeの<a href="https://www.molnlycke.com/about-this-site/terms-of-use/" target="_blank">リーガル</a>と<a href="https://www.molnlycke.com/about-this-site/policies/" target="_blank">プライバシーポリシー</a>に同意致します。<span className="require">＊</span></label>

                                <input type="checkbox" name="policy" id="policy" className="checkbox" value="1" required />
                                <p className="policy-note">
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
