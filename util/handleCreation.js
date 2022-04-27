const handleCreation = async (model,...arg) => {
      const responseFromDatabase = await model.create({arg})
      return responseFromDatabase
}

module.exports = handleCreation