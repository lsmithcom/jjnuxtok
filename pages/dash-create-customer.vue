<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Product Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><button @click="createCust" disabled="isLoading" class="dbttn jbttn-dash" to="dash-create-order">Create</button></div>
</div>

<section class="mx-6 bg-white rounded p-4 my-4">

<h3 class="text-left my-0">Customer: {{ customers.findCustomerByID.firstname }} {{customers.findCustomerByID.lastname}}</h3>

<div class="bg-agreylt border-agreymd border-t border-b py-4">
<div class="flex flex-row content-between justify-between w-full">
    <div class="flex flex-row justify-between w-1/2 ml-8 text-adrk font-medium">
    <div>Main</div>
    <div>Addresses</div>
    <div>Orders</div>
    <div>Reviews</div> 
    <div>Messages</div>      
</div>

      
</div>

</div>


<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">ID:</div><div class=""><input class="w-full" type="text" v-model="customer.custid"></div> 
    <div class="text-right pr-5">email:</div><div class=""><input class="w-full" type="text" v-model="customer.email"></div>   
</div>

</section>


    </div>
</template>


<script lang="ts" setup>

definePageMeta({
  layout: "dashboard",
})

useHead( {
    title: "Just Jen Administration Dashboard - Story Creation",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})

// define props
const { issue } = defineProps(["issue"]);

// create reactive comments array
const comments = ref(issue.comments.nodes);

// mutation query to add a comment to the issue
const createCustomer = gql`
  mutation ($subjectID: ID!, $body: String!) {
    createCustomer (input: { subjectId: $subjectID, body: $body }) {
      custid
    }
  }
`;

// mutation variables
const variables = ref({
  subjectID: issue.id,
  body:"  ",
});

// loading state ref
const isLoading = ref(false);

// destructure useMutation composable to obtain mutate frunction and rename it to `addComment`
const { mutate: addComment } = useMutation(addCommentQuery, variables.value);

// function to create new comment
const createComment = async () => {

  // return if body is empty
  if (variables.value.body.trim() === "") return;

  // set loading state to true
  isLoading.value = true;
  try {
    // call addComment function to add comment
    const { data } = await addComment(variables.value);

    // add new comment to comments array
    comments.value.push(data.addComment.commentEdge.node);

    // reset variables comment body
    variables.value.body = "";
  } catch (error) {
    console.log({ error });
  }

  // set loading state to false
  isLoading.value = false;
};

</script>