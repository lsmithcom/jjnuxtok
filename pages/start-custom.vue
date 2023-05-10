<template>
    <div>

<section class="bg-jlavpale">

<ul class="">

<FormWrap />


<li class="tabIt">
<h2 class="form-title">What is Your Order Quantity?</h2>

<div class="box-question">
<p><label><input name="frequency" required="true" type="radio" value="Once" />Quantity by Size</label></p>

<ul class="li-flex five row-wrap">
<li>S</li>
<li>M</li>
<li>L</li>
<li>XL</li>
<li>2XL</li>
<li><input placeholder="Quantity..." oninput="this.className = ''" name="S"></li>
<li><input placeholder="Quantity..." oninput="this.className = ''" name="M"></li>
<li><input placeholder="Quantity..." oninput="this.className = ''" name="L"></li>
<li><input placeholder="Quantity..." oninput="this.className = ''" name="XL"></li>
<li><input placeholder="Quantity..." oninput="this.className = ''" name="2XL"></li>
</ul>
</div>

<div class="box-question">

<p>How many times wil you order in a year (approximately)?</p>
<p><input placeholder="Quantity..." oninput="this.className = ''" name="quantity"></p>

</div>
</li>

<li class="tabIt">
<h2 class="form-title">Tell us about your design.</h2>

<div class="box-question">

<div class="mwidth-450">
<h4>Image Upload</h4>
<p><input placeholder="Upload image..." name="name"></p>
<h4>Description</h4>
<p><input placeholder="Tell us about the design.." name="email"></p>
</div>

</div>
</li>



</ul>

<div style="overflow:auto;">
<div style="float:right;">
  <button type="button" class="button button-outline" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
  <button type="button" class="button button-solid"  id="nextBtn" onclick="nextPrev(1)">Next</button>
</div>
</div>

<!-- Circles which indicates the steps of the form: -->
<div style="text-align:center;margin-top:40px;">
<span class="step"></span>
<span class="step"></span>
<span class="step"></span>
<span class="step"></span>
<span class="step"></span>
<span class="step"></span>
<span class="step"></span>
</div>

</section>

    </div>
</template>

