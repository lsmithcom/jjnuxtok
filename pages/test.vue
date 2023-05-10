<template>
<div>
  <article class="issue">
    <div class="wrapper">
      <!--  -->
      <div class="new-comment-cont">
        <div class="wrapper">
          <div class=" form-control !w-full">
            <label for="new-comment">Enter a comment</label>
            <textarea
              name= "new-custid"
              id= "new-comment"
              rows= "2"
              class= "w-full"
              v-model= "variables.custid"
            ></textarea>
            <textarea
              name= "new-comment"
              id= "new-comment"
              rows= "2"
              class= "w-full"
              v-model= "variables.email"
            ></textarea>
          </div>
          <div class="action-cont">
            <button
              @click= "addCustomer"
              :disbled= "isLoading"
              class="cta !bg-teal-700 text-teal-100 !border-teal-800 focus:cursor-wait"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>



</div>
</template>

<script setup>

const query = gql`
mutation CreateACustomer {
   createCustomer(data: {
   custid: "301"
   email: "go@gmail.com"
   }) {
       custid
       email
   }
}
`
const variables = {
  custid: 'John Doe',
  email: 'jd@example.com'
}
const { mutate: createCustomer } = useMutation(query, { variables })
</script>
