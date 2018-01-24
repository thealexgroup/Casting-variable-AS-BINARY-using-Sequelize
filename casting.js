
  app.get("/your/endpoint/:stringToCheck", function(req, res) {

    db.yourDataBase.findOne({

      where:  Sequelize.where(

        Sequelize.cast(Sequelize.col('databaseColumnToSearch'), 'BINARY'), {$like: req.params.stringToCheck})

    }).then(function(results) {

      res.json(results);

    });

  });