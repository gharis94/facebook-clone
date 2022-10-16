import {initializeApp} from "firebase/app";
import {getFirestore,getDoc,setDoc,doc,collection,writeBatch,query,getDocs} from 'firebase/firestore'
import {getAuth,signInWithPopup,signInWithEmailAndPassword,GoogleAuthProvider,signOut,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzFqoqPnbv_mLDzfM2NVmlqkH9IUY1Jcw",
    authDomain: "socialmedia-crud.firebaseapp.com",
    projectId: "socialmedia-crud",
    storageBucket: "socialmedia-crud.appspot.com",
    messagingSenderId: "652715167819",
    appId: "1:652715167819:web:bd2fa616971c98cdd2fdce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth section
export const auth = getAuth()

const provider =new GoogleAuthProvider();

provider.setCustomParameters({
prompt:'select_account'
})

export const signInWithGoogle = ()=> signInWithPopup(auth,provider);

export const createUserWithEmail =async(email,password)=>{     
    const rsp =await createUserWithEmailAndPassword(auth,email,password)
    return rsp

}

export const signInWithEmail =async(email,password)=>{ 
    const rsp=await signInWithEmailAndPassword(auth,email,password)
    return rsp    
}

export const SignOutF =async()=>await signOut(auth)

export const onAuthChange =(callback)=> onAuthStateChanged(auth,callback)

//firestore

export const db = getFirestore()

export const createUserDocFromAuth =async(userAuth,other={})=>{
    const userRef = doc(db,'users',userAuth)

    const userSnapShot = await getDoc(userRef);

    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;

        try{
            await setDoc(userRef,{
                displayName,
                email,
                createdAt:new Date(),
                ...other
            })
        }catch(error){
            console.log(error)
        }
    }

}