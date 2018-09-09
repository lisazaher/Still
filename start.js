const express = require('express');
const path = require('path');
const app= express()
const PORT = process.env.PORT || 5000

//from app
var indexRouter = require('./routes/index');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;
