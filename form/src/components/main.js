
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

var initValues = {
    detail_explain: null,
    document_send: null,
    name: '',
    email: '',
    job: '1',
    job_other: '',
    zip_code: '',
    prefecture: '',
    city: '',
    address: '',
    facility: '',
    department: '',

    notification: null,
    policy: null,

}

var jobs = [
    { id: 1, label: "看護師" },
    { id: 2, label: "皮膚排泄ケア認定看護師" },
    { id: 3, label: "医師" },
    { id: 4, label: "薬剤師" },
    { id: 5, label: "栄養士" },
    { id: 6, label: "学生" },
    { id: 7, label: "その他" },
];

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initValues,
            error_messages: {},
            show_error_dialog: false,
            show_complete_dialog: false,
        }
    }

    /**
     * 住所自動入力
     */
    complementAddress = () => {
        console.log("complementAddress")
        const { AjaxZip3 } = window;
        AjaxZip3.zip2addr(
            'zip_code',
            '',
            'prefecture',
            'city',
            // 'address'
        );
    };
    onBlurZipcode = () => {
        this.setState({
            prefecture: document.getElementById('prefecture').value,
            city: document.getElementById('city').value,
        });
    };

    /**
     * RifeCycle
     *
    */
    componentDidMount = () => {
    }

    /**
     * Action
     *
    */

    onClickDetailExplain = (val) => {
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

    onChangeAddress = (e) => {
        this.setState({ address: e.target.value })
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

    onChangeJob = (e) => {
        this.setState({ job: e.target.value })
        if (e.target.value != 7) {
            this.setState({ job_other: '' })
        }
    }

    onChangeJobOther = (e) => {
        this.setState({ job_other: e.target.value })
    }

    isPolicyClicked = () => {
        return this.state.policy == 1
    }

    post = () => {
        console.log(this.state)
        if (this.validation()) {
            // 検証
            //server
            axios.post('/jona/api/public/', {
                // local
                // axios.post('/api/public/', {
                ...this.state
            })
                .then((res) => {
                    console.log("success")
                    this.setState({ show_complete_dialog: true })
                    this.clearForm()
                })
                .catch((res) => {
                    console.log("error", res)
                    console.log("res.data", res.data)
                    // this.setState({ error_messages: res.data })
                })
        }
    }

    validation = () => {
        const {
            name,
            email,
            job,
            job_other,
            facility,
            department,
            zip_code,
            prefecture,
            city,
            address,
            notification,

        } = this.state

        var msg = [];
        if (!name) msg['name'] = ["名前が未入力です"]
        if (!email) msg['email'] = ["電子メールが未入力です"]
        if (!job) msg['job'] = ["ご職業が未入力です"]
        if (job == 7 && !job_other) msg['job_other'] = ["ご職業、その他が未入力です"]
        if (!zip_code) msg['zip_code'] = ["郵便番号が未入力です"]
        if (!prefecture) msg['prefecture'] = ["都道府県が未入力です"]
        if (!city) msg['city'] = ["市区町村が未入力です"]
        if (!address) msg['address'] = ["番地が未入力です"]
        if (!facility) msg['facility'] = ["ご所属施設名が未入力です"]
        if (!department) msg['department'] = ["ご所属（部門名・病棟など）が未入力です"]
        if (!notification) msg['notification'] = ["案内の希望が未入力です"]

        // if (Object.keys(msg) == 0) return true;
        if (this.objectKeyCount(msg) == 0) return true;
        this.setState({
            error_messages: msg,
            show_error_dialog: true
        })
    }
    objectKeyCount = (object) => {
        var count = 0;
        for (var key in object) {
            count++;
        }
        return count;
    }

    closeErrorDialog = () => {
        this.setState({ show_error_dialog: false })
    }

    closeCompleteDialog = () => {
        this.setState({ show_complete_dialog: false })
    }

    clearForm = () => {
        this.setState(initValues)
    }

    /**
     * Render
    *
    */
    renderErrorDialog = () => {
        var { show_error_dialog, error_messages } = this.state

        var messages = []
        for (var key in error_messages) {
            messages.push(error_messages[key].map(msg => msg));
        }

        return (
            <Dialog onClose={this.closeErrorDialog} open={show_error_dialog}>
                <div className='error-dialog'>
                    <div className={'messages'}>
                        {messages.map(msg => <p>{msg}</p>)}
                    </div>
                    <button onClick={this.closeErrorDialog} className="btn">閉じる</button>
                </div>
            </Dialog>
        );
    }


    renderCompleteDialog = () => {
        var { show_complete_dialog } = this.state
        return (
            <Dialog onClose={this.closeCompleteDialog} open={show_complete_dialog}>
                <div className='error-dialog'>

                    <div className={'messages'}>
                        アンケートのご回答ありがとうございました。
                    </div>
                    <button onClick={this.closeCompleteDialog} className="btn">閉じる</button>
                </div>
            </Dialog>
        );
    }


    render() {
        console.log(this.state)
        return (
            <main className="main">
                {this.renderErrorDialog()}
                {this.renderCompleteDialog()}
                <div className="title">
                    <h1>第34回日本手術看護学会年次大会 Web開催 専⽤サイト</h1>
                </div>
                <div className="description">
                    <p>術中の皮膚保護にどの様に取り組んでおられますでしょうか？</p>
                    <p>昨今、術中における皮膚保護が大きく見直されてきております。</p>
                    <p>関連の資料をお送りさせて頂きますので、下記のフォームよりお申込み下さい。</p>
                    <p>資料をご希望頂いた皆さまには、特製ロゴ入りトートバッグを差し上げます。</p>

                </div>

                <div className="product-description" >

                    <img className="product_image" src="./images/product1.png"></img>
                    <img className="product_image" src="./images/product2.png"></img>
                </div>

                <div className="form">
                    <form method="post">
                        <div className="form-item">
                            <label className="form-label">
                                メピレックス ボーダー プロテクトについて、さらに詳しくご説明いたします。<br />
                                フォームのご希望欄にチェックを⼊れていただき、必要事項を⼊⼒の上、送信ボタンをクリックしてください。後⽇、担当者よりご連絡いたします。
                            </label>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(0)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-1" checked={this.isCheckedDetailExplain(0)} />
                                <label >説明会希望</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(1)}>
                                <input type="radio" name="detail_explain" id="detail_explain1-2" checked={this.isCheckedDetailExplain(1)} />
                                <label >デモ希望</label>
                            </div>
                            <div className="form-radio-wrap" onClick={() => this.onClickDetailExplain(2)}>
                                <input type="radio" name="detail_explain1" id="detail_explain1-3" checked={this.isCheckedDetailExplain(2)} />
                                <label >製品について詳しく聞きたい</label>
                            </div>
                        </div>

                        <div className="form-item">
                            <label className="form-label">
                                メピレックス ボーダー プロテクトについて、さらに詳しい資料をお送りします。
                                資料送付のご希望を頂いた方には特製ロゴ入りトートバッグを差し上げます。
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
                            <input className="form-input" type="text" name='name' onChange={this.onChangeName} value={this.state.name} placeholder="お名前＊" />
                        </div>

                        <div className="form-item">
                            <label className="form-label">電子メール<span className="require">＊</span></label>
                            <input className="form-input" type="email" name='email' onChange={this.onChangeEmail} value={this.state.email} placeholder="電子メール＊" />
                        </div>


                        <div class="form-item">
                            <label class="form-label">ご職業<span class="require">＊</span></label>
                            <select name="jobs" defaultValud={this.state} class='form-select' placeholder="選択してください" onChange={(e) => { this.onChangeJob(e) }} required>
                                {jobs.map((job) => <option key={job.id} value={job.id} >{job.label}</option>)}
                            </select>
                            {this.state.job == 7 && <input class="form-input" type="text" name='job_other' placeholder="その他の方は詳細のご記入をお願い致します＊" onChange={(e) => { this.onChangeJobOther(e) }} />}
                        </div>


                        <div className="form-item">
                            <label className="form-label">ご住所<span className="require">＊</span></label>
                            <input className="form-input" type='text' maxLength="7" name='zip_code' placeholder="郵便番号(数字のみでご入力ください)＊"
                                value={this.state.zip_code}
                                onChange={this.onChangezip_code}
                                onKeyUp={this.complementAddress}
                                onBlur={this.onBlurZipcode}
                            />
                            <input className="form-input" type='text' name='prefecture' id='prefecture' required placeholder="都道府県＊" onChange={this.onChangePrefecture} value={this.state.prefecture} />
                            <input className="form-input" type='text' name='city' id='city' required placeholder="市区町村＊" onChange={this.onChangeCity} value={this.state.city} />
                            <input className="form-input" type='text' name='address' id='address' required placeholder="番地＊" onChange={this.onChangeAddress} value={this.state.address} />
                            <input className="form-input" type='text' name='facility' onChange={this.onChangeFacility} value={this.state.facility} placeholder="ご所属施設名＊" />
                            <input className="form-input" type='text' name='department' onChange={this.onChangeDepartment} value={this.state.department} placeholder="ご所属（部門名・病棟など）＊" />

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
                                    ※いいえを選択された場合でも、資料、ギミック発送のご連絡のためE-mailでご連絡申し上げる場合がございます。
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




