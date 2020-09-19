
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail_explain: null,
            document_send: null,
            name: '',
            email: '',
            tel: '',
            facility: '',
            department: '',
            zip_code: '',
            prefecture: '',
            city: '',
            adress: '',
            notification: null,
            policy: null
        }
    }

    /** 
     * RifeCycle
     * 
    */
    componentDidMount = () => {
        setTimeout(this.modalClose, 7000)
    }
    /** 
     * Action
     * 
    */

    onClickDetailExplain = (val) => {
        console.log("onClickDetailExplain")
        this.setState({ detail_explain: val })
    }
    isCheckedDetailExplain = (val) => {
        return val == this.state.detail_explain
    }

    onClickDocumentSend = () => {
        this.setState({
            document_send: this.state.document_send ? 0 : 1
        })
    }

    isClickDocumentSend = () => {
        console.log("isClickDocumentSend")
        return this.state.document_send == 1
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeTel = (e) => {
        this.setState({ tel: e.target.value })
    }

    onChangeFacility = (e) => {
        this.setState({ facility: e.target.value })
    }

    onChangeDepartment = (e) => {
        this.setState({ department: e.target.value })
    }


    onChangezip_code = (e) => {
        this.setState({ zip_code: e.target.value })
    }

    onChangePrefecture = (e) => {
        this.setState({ prefecture: e.target.value })
    }

    onChangeCity = (e) => {
        this.setState({ city: e.target.value })
    }

    onChangeAdress = (e) => {
        this.setState({ adress: e.target.value })
    }

    clickNotification = (val) => {
        this.setState({ notification: val })
    }

    isNoticicationChecked = (val) => {
        return this.state.notification == val
    }
    onClickPolicy = (e) => {
        this.setState({ policy: !this.state.policy })
    }

    isPolicyClicked = () => {
        return this.state.policy == 1
    }

    post = () => {

        console.log("■post this.state")
        console.log(this.state)

        axios.post('/jona/api/public/', {
            ...this.state
        })
            .then((res) => {
                console.log("then")
                console.log(res)
            })
            .catch((res) => {
                console.log("catch")
                console.log("err", res.response)
            })
    }

    validation = () => {

    }
    /** 
 * Render
 * 
*/
    render() {
        console.log(this.state)
        return (
            <main className="main">
                <div onClick={this.post}>
                    test
                </div>
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
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(1)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-1" checked={this.isCheckedDetailExplain(1)} />
                                <label >説明会希望</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(2)}>
                                <input type="radio" name="detail_explain" id="detail_explain1-2" checked={this.isCheckedDetailExplain(2)} />
                                <label >デモ希望</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(3)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-3" checked={this.isCheckedDetailExplain(3)} />
                                <label >製品について詳しく聞きたい</label>
                            </div>
                        </div>

                        <div className="form-item">
                            <label className="form-label">
                                メピレックス ボーダー プロテクトについて、さらに詳しい資料をお送りします。
                                資料送付のご希望を頂いた方にはギミックを差し上げます。
                            </label>
                            <div className="form-radio-wrap" onClick={this.onClickDocumentSend}>
                                <input type="checkbox" name="document_send" id="document_send" checked={this.isClickDocumentSend()} />
                                <label >資料送付希望</label>
                            </div>
                        </div>

                        <div className="description">
                            下記にご入力お願い致します。メンリッケからのご連絡、資料の送付に使わせて頂きます。（＊は必須項目です）
                        </div>

                        <div className="form-item">

                            <label className="form-label">お名前<span className="require">＊</span></label>
                            <input className="form-input" type="text" name='name' onChange={this.onChangeName} value={this.state.name} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電子メール<span className="require">＊</span></label>
                            <input className="form-input" type="email" name='email' onChange={this.onChangeEmail} value={this.state.email} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電話番号<span className="require">＊</span></label>
                            <input className="form-input" type="tel" name='tel' onChange={this.onChangeTel} value={this.state.tel} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">施設名<span className="require">＊</span></label>
                            <input className="form-input" type='text' name='facility' onChange={this.onChangeFacility} value={this.state.facility} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">部署名<span className="require">＊</span></label>
                            <input className="form-input" type='text' name='department' onChange={this.onChangeDepartment} value={this.state.department} />
                        </div>


                        <div className="form-item">
                            <label className="form-label">ご住所<span className="require">＊</span></label>
                            <input className="form-input" type='text' maxLength="7" name='zip-code' placeholder="郵便番号(数字のみでご入力ください)＊" onChange={this.onChangezip_code} value={this.state.zip_code} />

                            <input className="form-input" type='text' name='prefecture' required placeholder="都道府県＊" onChange={this.onChangePrefecture} value={this.state.prefecture} />
                            <input className="form-input" type='text' name='city' required placeholder="市区町村＊" onChange={this.onChangeCity} value={this.state.city} />
                            <input className="form-input" type='text' name='address' required placeholder="番地＊" onChange={this.onChangeAdress} value={this.state.adress} />
                        </div>

                        <div className="form-item">
                            <label className="form-label">今後メンリッケヘルスケア株式会社からのセミナーや製品についてのご案内などをお受け取りになられることをご希望の場合は”はい”を選択して下さい。<span className="require">＊</span></label>

                            <div className="policy-wrapper">
                                <span className="form-radio-wrap" onClick={() => this.clickNotification(1)}>
                                    <input type="radio" name="notification" id="notification-1" checked={this.isNoticicationChecked(1)} />
                                    <label for="notification-1">はい</label>
                                </span>
                                <span className="form-radio-wrap" onClick={() => this.clickNotification(2)}>
                                    <input type="radio" name="notification" id="notification-2" checked={this.isNoticicationChecked(2)} />
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
                                <input type="checkbox" name="policy" id="policy" className="checkbox" onClick={this.onClickPolicy} checked={this.isPolicyClicked()} />
                                <p className="policy-note">
                                    Box 13080, Gamlestadvägen 3C, SE-40252 Göteborg, Sweden. Privacy Policy The Mölnlycke trademark, name and respective logo are registered globally to one or more of the Mölnlycke Health Care Group of Companies. © 2020 Mölnlycke Health Care AB. All rights reserved.
                                </p>
                            </div>
                        </div>

                        <input type='button' className="btn" value="送信" disabled={!this.state.policy} onClick={this.post} />

                        <p className="submit-note" id="submit-note">
                            ※プライバシーポリシーに同意いただかないと送信出来ません。
                        </p>

                    </form>
                </div>
            </main>
        );
    }
}    
