class Card {
	constructor({ handleDeleteCard, handleAddProduct, handleDeleteProduct }, element) {
		this._element = element;
		this._handleDeleteCard = handleDeleteCard;
		this._handleAddProduct = handleAddProduct;
		this._handleDeleteProduct = handleDeleteProduct;
		this._price = this._element.querySelector('.card__sum').dataset.price;
		this._input = this._element.querySelector('input');
	}

	removeCard() {
		this._element.remove();
		this._element = null;
	}

	addProduct() {
		this._count = this._input.value;
		// eslint-disable-next-line radix
		this._count = parseInt(this._count) + 1;
		this._input.value = this._count;
		this._input.setAttribute('value', this._count);
		this._updateSum();
	}

	deleteProduct() {
		this._count = this._input.value;
		this._count = this._count < 1 ? 1 : this._count;
		// eslint-disable-next-line radix
		this._count = parseInt(this._count) - 1;
		this._count = this._count < 1 ? 1 : this._count;
		this._input.value = this._count;
		this._input.setAttribute('value', this._count);
		this._updateSum();
	}

	_updateSum() {
		// eslint-disable-next-line radix
		this._sum = parseInt(this._price) * parseInt(this._count);
		this._element.querySelector('.card__sum span').textContent = this._sum;
	}

	setEventListeners() {
		this._element
			.querySelector('.card__delete-button')
			.addEventListener('click', () => this._handleDeleteCard(this));
		this._element
			.querySelector('.count-form__btn_type_plus')
			.addEventListener('click', () => this._handleAddProduct(this));
		this._element
			.querySelector('.count-form__btn_type_minus')
			.addEventListener('click', () => this._handleDeleteProduct(this));
	}
}

export default Card;
