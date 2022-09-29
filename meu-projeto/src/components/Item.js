// component filho, passando informações para o component pai List

import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
	return(
		<>
			<li>{marca} - {ano_lancamento}</li>
		</>
	)
}

// Validando informações com o propTypes
Item.propTypes = {
	marca: PropTypes.string.isRequired, //isRequired -> Obrigatório para o funcionamento do componente
	ano_lancamento: PropTypes.number.isRequired
}

// valor default 
Item.defaultProps = {
	marca: "Faltou a marca",
	ano_lancamento: 0
}

export default Item