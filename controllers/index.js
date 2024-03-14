const getAllTasks = (req, res) => {
  return res.render('home', {
    title: 'All Tasks'
  })
}

module.exports = {
  getAllTasks
}