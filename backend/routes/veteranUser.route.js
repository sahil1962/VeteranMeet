let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let veteranUserSchema = require('../Models/VeteranUsers')

// CREATE user
router.route('/create-user').post((req, res, next) => {
  veteranUserSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  veteranUserSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single user by email
router.route('/login-user/:email').get((req, res) => {
  veteranUserSchema.find({email:req.params.email}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // Update Student
// router.route('/update-student/:id').put((req, res, next) => {
//   studentSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Student updated successfully !')
//       }
//     },
//   )
// })

// // Delete Student
// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

module.exports = router
