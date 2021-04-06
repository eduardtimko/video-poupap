class CustomPoupap {
	constructor({
		node,
		eventSelector,
		siteWrap,
		onShowCallBack,
		onHideCallBack
	}) {
		this.node = node;
		this.eventSelector = eventSelector;
		this.siteWrap = siteWrap;
		this.onShowCallBack = onShowCallBack;
		this.onHideCallBack = onHideCallBack;

		this.rId = Math.random().toString(36).substring(7);
		this.__onShow = this.__onShow.bind(this);
		this.__onHide = this.__onHide.bind(this);
		this.__onHandlerHide = this.__onHandlerHide.bind(this);
		this.__redirectingToFirst = this.__redirectingToFirst.bind(this);
		this.__redirectingToLast = this.__redirectingToLast.bind(this);
	}

	__onShow() {
		let elem = document.getElementById(this.rId);
		elem.classList.add('active');
		elem.focus();
		elem.setAttribute('aria-hidden', false);
		document.querySelector(this.siteWrap).setAttribute('aria-hidden', true);
		this.onShowCallBack && this.onShowCallBack();
	}

	__onHide() {
		let elem = document.getElementById(this.rId);
		elem.classList.remove('active');
		elem.setAttribute('aria-hidden', true);
		document.querySelector(this.siteWrap).setAttribute('aria-hidden', false);
		this.onHideCallBack && this.onHideCallBack();
	}

	__onHandlerHide(e) {
		if (e.keyCode === 27) {
			this.__onHide();
		}
	}

	__redirectingToFirst(e) {
		if (!e.shiftKey && e.which === 9) {
			e.preventDefault();
			document.getElementById(this.rId).focus();
		}
	}

	__redirectingToLast(e) {
		if (e.shiftKey && e.keyCode === 9) {
			e.preventDefault();
			document.querySelector('.close').focus();
		}
	}

	init() {
		let h = document.querySelector(this.node).cloneNode(true);
		document.querySelector(this.node).remove();
		let html = `<div id="${this.rId}" class="poupap" aria-hidden="true" tabindex="1">
			<div class="poupap__content" tanindex="2">
				${h.outerHTML}
				<button class="close" tanindex="3"></button>	
			</div>
		</div>`;
		let body = document.querySelector('body');
		body.insertAdjacentHTML('beforeEnd', html);


		document.querySelector(this.eventSelector).addEventListener('click', this.__onShow);
		document.querySelector('.close').addEventListener('click', this.__onHide);
		document.addEventListener('keydown', this.__onHandlerHide);
		document.querySelector('.close').addEventListener('keydown', this.__redirectingToFirst);
		document.getElementById(this.rId).addEventListener('keydown', this.__redirectingToLast);

	}

	destroy() {
		document.querySelector(this.eventSelector).removeEventListener('click', this.__onShow);
		document.querySelector('.close').removeEventListener('click', this.__onHide);
		document.removeEventListener('keydown', this.__onHandlerHide);
		document.querySelector('.close').removeEventListener('click', this.__redirectingToFirst);
		document.getElementById(this.rId).removeEventListener('keydown', this.__redirectingToLast);
		document.querySelector(this.html).remove();
	}
}
