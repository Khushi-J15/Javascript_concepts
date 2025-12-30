const makeError = () => {
  try{
    const name = "Dave";
    name = "ji";
  }
  catch(err){
    console.warn(err);
    console.table(err);
    console.error(err.name);
    console.error(err.stack);
    // console.error(err);
  }
  finally{
    console.log("...finally");
  }
}
makeError();
// console.error();