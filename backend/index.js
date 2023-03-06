import express, { application } from "express"
import cors from "cors"
import mongoose from "mongoose"
//import User  from './Models/VeteranUsers'
//import veternRoute from '../backend/routes/veteranUser.route'

mongoose.connect("mongodb://127.0.0.1:27017/VeteranMeet", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB connected")
})


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })
// const User = new mongoose.model("User", userSchema)
const veteranUserSchema = new mongoose.Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  gender: {
    type: String
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"]
  },
  profession: {
    type: String
  },
  relationshipstatus: {
    type: String,
    default: "Single"
  },
  password: {
    type: Number
  },
  hobbies: {
    type: [String],
    default: undefined
  },
  followers: {
    type: [String],
    default: undefined
  },
  following: {
    type: [String],
    default: undefined
  }
}, {
  collection: 'users',
  versionKey: false
})
const User = new mongoose.model('Users', veteranUserSchema)

let postSchema = new mongoose.Schema({
  caption: String,
  email : {
    type: String,
      // required: [true, "Please provide an Email!"],
    unique: false
  }
}, {
  collection: 'posts',
  versionKey: false
}
);
const PostModel = new mongoose.model('Post', postSchema);


let EventShareSchema = new mongoose.Schema({
  caption: String,
  email : {
    type: String,
    unique: false
  }
}, {
  collection: 'Events',
  versionKey: false
}
);

const EventShareModel = new mongoose.model('Events', EventShareSchema);

//Routes
app.post("/signup", (req, res) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

app.post("/login", (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {

      // console.log(password + "-----" + user.password + "======")
      if (password !== user.password) {
        // console.log(password + "-----" + user.password)
        res.send({ message: "Login Successfull", user: user })
      } else {
        res.send({ message: "Password didn't match" })
      }
    } else {
      res.send({ message: "User not registered" })
    }
  })
})


// Update user followers
app.put("/update-follower", (req, res, next) => {
  var userEmail = req.body.email;
    User.update({ email: userEmail }, {$set: req.body}, {multi: true}, function(err, user) {
        // console.log(`user: ${userEmail} req.body:  ${JSON.stringify(req.body)} );  
        if (err) {
            return res.json({success: false, msg: 'Cannot Update User'});
        }       
        if (!user) {
            return res.status(404).json({success: false, msg: 'User not found'});
        }  
        else { 
            res.json({success: true, msg: 'User has been updated'}) 
        };
    });
})

// get the data of  all the followers
app.get("/get", (req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

app.get('/login-vetern/:email', (req, res) => {
  User.find({ email: req.params.email }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//post a post
app.post("/postshare", (req, res, next) => {
  PostModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


//post a EventShare
app.post("/EventShare", (req, res, next) => {
  EventShareModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


// get user posts email based
app.get('/getpost/:email', (req, res) => {
  PostModel.find({ email: req.params.email }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// get user Events email based
app.get('/getEvents/:email', (req, res) => {
  EventShareModel.find({ email: req.params.email }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



app.listen(4000, () => {
  console.log("BE started at port 4000")
})

app.use((req, res, next) => {
  next(createError(404));
});
