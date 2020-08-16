import React from 'react';
import { Button } from 'react-bootstrap';
import { SELO_DIGITAL } from '../../store/constant';
import CardModel from '../../pages/CardModal';
import axiosHelper from '../helper/axiosHelper';
import authHelper from '../helper/authHelper';
import { Base64 } from 'js-base64';
import * as env from '../../env';
import UtilHelper from '../helper/UtilHelper';
import { withTranslation } from 'react-i18next';

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			listMarkets: []
		};
	}

	async componentDidMount() {
		const token = Base64.encode(await authHelper.getHeaderToken());
		const paramHeaders = {
			headers: {
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + token
			}, withCredentials: true
		};

		const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/market/listAll', paramHeaders);
		if (result && result.ebit_markets)
			this.setState({ listMarkets: result.ebit_markets });

		console.log('result:: ', result);

	}
	render() {
		const { t } = this.props;


		return (
			<div>
				<div className="container">
					<div id="content">
						<div className="title">
							<span className="byline">{t('common:selo-digital.index.title')}</span>
						</div>
						<p>{t('common:selo-digital.index.text')}</p>
						<Button variant="outline-primary" className="button-p" href={SELO_DIGITAL.ListOrganization} >{t('common:selo-digital.index.btn-new')}</Button>
					</div>
					<br />
					<div className="grid-container">
						{
							this.state.listMarkets.length > 0 ? (
								this.state.listMarkets.map((cc, i) => {
									return <div key={i}>
										<div key={"div-grid" + i} className="grid-item"><CardModel key={"api" + cc.id} divStyle={{ width: '16rem' }} title={cc.name.substr(0, 20)}
											imsSrc={cc.image ? cc.image : "/images/api.svg"}
											buttonText={t('common:selo-digital.index.execute')}
											buttonAction={SELO_DIGITAL.Executar
												+ "?r=" + UtilHelper.base64ParamEncode('marketId=' + cc.id)}
											buttonStatus="active"
											text={cc.description.substr(0, 18) + ".."} />
										</div>
									</div>
								})) : (<><div>no data</div></>
								)
						}
					</div>

				</div>

			</div>
		);
	}
}
export default withTranslation() (Index);