const VOTE_ABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "date",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "code",
				type: "string",
			},
			{
				indexed: false,
				internalType: "address",
				name: "childAddress",
				type: "address",
			},
		],
		name: "ChildCreated",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_token_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_token_code",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_total_supply",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "promoter",
				type: "address",
			},
		],
		name: "createChild",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "remove",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
			{
				internalType: "address",
				name: "_i",
				type: "address",
			},
		],
		name: "set",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setPromoteFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setServiceFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "val",
				type: "address",
			},
		],
		name: "setServiceReceiver",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "get",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTokenList",
		outputs: [
			{
				internalType: "contract Token[]",
				name: "",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_addr",
				type: "address",
			},
		],
		name: "getTokenSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "promoteFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "serviceFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "serviceReceiver",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "tokenList",
		outputs: [
			{
				internalType: "contract Token",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "tokenOwners",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

const VOTE_ADDR = "0xb005D7bDB94342744E8087b15dDf30DDCBBbED8b";
// $(function () {
// 	init();
// 	//??????????????????class?????? ".class??????" ID ???#id?????????
// 	$("#qianbaodizhi").blur(function () {
// 		VOTE_ADDR = $(this).val();
// 		console.log("@", VOTE_ADDR);
// 	});
// });

$(function () {
	init();
});
//   ????????????

function getWeb3Provider() {
	if (!window.web3Provider) {
		if (!window.ethereum) {
			console.error("there is no web3 provider.");
			return null;
		}
		window.web3Provider = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);
	}
	return window.web3Provider;
}

function showAlert(title, message) {
	let m = $("#alertModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showInfo(title, message) {
	let m = $("#infoModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showLoading(title, message) {
	let m = $("#loadingModal");
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	let obj = {
		setTitle: t => {
			m.find(".x-title").text(t);
		},
		setMessage: t => {
			m.find(".x-message").text(t);
		},
		close: () => {
			setTimeout(function () {
				myModal.hide();
			}, 500);
		},
	};
	obj.setTitle(title);
	obj.setMessage(message);
	myModal.show();
	return obj;
}

function translateError(err) {
	window.err = err;
	if (typeof err === "string") {
		return err;
	}
	if (err.error && err.error.code && err.error.message) {
		return `Error (${err.error.code}): ${err.error.message}`;
	}
	if (err.code && err.message) {
		return `Error (${err.code}): ${err.message}`;
	}
	return err.message || err.toString();
}

function init() {
	console.log("init vue...");
	window.vm = new Vue({
		el: "#vm",
		data: {
			account: null,
			chainId: 0,
			proposal: 0,
			name: "", //???????????????????????????????????????  ?????????
			symbol: "",
			totalSupply: "",
			allMyContract: "",
			newContractAddress: "",
			promoter: "0x1eB5825F892Ab9d1D5bC6aE1Ba9007ACaf166b4e",
		},
		computed: {
			ready: function () {
				return this.account && this.chainId === 66;
			},
			wrongNetwork: function () {
				return this.account && this.chainId !== 66;
			},
		},
		methods: {
			shuzu() {},

			gotoScanUrl: function () {
				window.open("https://ropsten.etherscan.io/address/" + this.account);
			},
			// ???????????????????????????
			createChild: async function () {
				let loading = showLoading("??????", "?????????...");
				try {
					if (!this.ready) {
						throw "??????????????????!";
					}
					loading.setMessage("????????????????????????");
					// TODO: ??????MetaMask????????????
					// ???????????????ABI????????????Contract??????:
					let contract = new ethers.Contract(
						VOTE_ADDR,
						VOTE_ABI,
						window.getWeb3Provider().getSigner()
					);
					// ??????vote()????????????????????????tx??????:
					// ??????????????? let tx = await contract.????????????(this.huangbin ??????);

					let tx = await contract.createChild(
						this.name,
						this.symbol,
						this.totalSupply,
						this.promoter,
						{ value: ethers.utils.parseEther("1") }
					);
					console.log(VOTE_ADDR);
					loading.setMessage("??????????????????...");
					// ??????tx??????????????????3???????????????:
					await tx.wait(1);
					showInfo("????????????");
					await this.getAddress(contract);
				} catch (e) {
					showAlert("??????", translateError(e));
				}
				loading.close();
			},

			// +++
			async getAddress(contract) {
				this.newContractAddress = await contract.get(this.account);
				console.log("123", "@");
			},
			// ++
			async getAfterLogin() {
				let contract = new ethers.Contract(
					VOTE_ADDR,
					VOTE_ABI,
					window.getWeb3Provider().getSigner()
				);
				this.newContractAddress = await contract.get(this.account);
			},
			// ?????????????????????
			accountChanged: function (accounts) {
				console.log(
					"wallet account changed:",
					accounts.length === 0 ? null : accounts[0]
				);
				if (accounts.length === 0) {
					this.disconnected();
				} else {
					this.account = accounts[0];
					document.cookie = "__account__=" + this.account + ";max-age=1296000";
				}
			},
			disconnected: async function () {
				console.warn("wallet disconnected.");
				this.account = null;
			},
			chainChanged: function (chainId) {
				console.log(
					"wallet chainId changed: " + chainId + " = " + parseInt(chainId, 16)
				);
				this.chainId = parseInt(chainId, 16);
			},
			connectWallet: async function () {
				console.log("try connect wallet...");
				if (window.getWeb3Provider() === null) {
					console.error("there is no web3 provider.");
					return false;
				}
				try {
					this.accountChanged(
						await window.ethereum.request({
							method: "eth_requestAccounts",
						})
					);
					this.chainChanged(
						await window.ethereum.request({
							method: "eth_chainId",
						})
					);
					window.ethereum.on("disconnect", this.disconnected);
					window.ethereum.on("accountsChanged", this.accountChanged);
					window.ethereum.on("chainChanged", this.chainChanged);
				} catch (e) {
					console.error("could not get a wallet connection.", e);
					return false;
				}
				console.log("wallet connected.");
				// +++
				this.getAfterLogin();
				return true;
			},
		},
	});
}
