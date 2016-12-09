var express = require('express');
var router = express.Router();
var reclamo = {tipoReclamo: 'odeco',
              observacion: 'Mal servicio',
              fecha: '26/11/2016'}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Final', subtitle: 'Avances de computacion', reclamo: reclamo});
});

module.exports = router;
