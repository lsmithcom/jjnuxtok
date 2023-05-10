<template>
    <div>
        <Navbar />
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/4"><Custnav /></div>
            <div class="w-full md:w-3/4 px-6">
                <slot />
            </div>
        </div>
        <Footbar />
    </div>
</template>