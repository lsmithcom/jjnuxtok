const faunaStuff = useRuntimeConfig()
export default (req, res) => {
  // In server, you can now access config.apiSecret, in addition to config.public
  console.log(faunaStuff.faunaToken)
  console.log(faunaStuff.faunaURL)
}