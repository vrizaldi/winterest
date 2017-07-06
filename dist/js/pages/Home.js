"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _Input = require("../components/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _ListActions = require("../actions/ListActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (store) {
	return {
		status: store.list.status,
		businesses: store.list.businesses
	};
}), _dec(_class = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: "scan",
		value: function scan() {
			var location = document.getElementById("location").value;
			this.props.dispatch((0, _ListActions.scan)(location));
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"p",
					null,
					"#home"
				),
				_react2.default.createElement(_Input2.default, { id: "location",
					label: "Location" }),
				_react2.default.createElement(_Button2.default, {
					label: "Scan it!",
					onClick: this.scan.bind(this) }),

				// if loading
				this.props.fetching ? _react2.default.createElement(
					"p",
					null,
					"Scanning area..."
				) : "",
				this.props.businesses.length == 0 ? "" :
				// if list containst some item
				// list the businesses
				this.props.businesses.map(function (business) {
					return _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"h1",
							null,
							_react2.default.createElement(
								"a",
								{ href: business.url },
								business.name
							),
							"(",
							business.isClosed ? "Closed" : "Open!",
							")"
						),
						_react2.default.createElement(
							"p",
							null,
							business.rating,
							" stars"
						),
						_react2.default.createElement(
							"ul",
							null,
							_react2.default.createElement(
								"li",
								null,
								"Address: ",
								business.location.address1,
								", ",
								business.location.city,
								" (",
								business.location.zip_code,
								")"
							),
							_react2.default.createElement(
								"li",
								null,
								"Phone: ",
								business.display_phone
							)
						)
					);
				})
			);
		}
	}]);

	return Home;
}(_react2.default.Component)) || _class);
exports.default = Home;