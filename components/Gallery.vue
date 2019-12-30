<template>
	<div class="gallery">
		<a :href="item.image" class="gallery__thumb" data-fancybox="gallery" v-for="item in gallery" v-bind:key="item.id">
			<img :src="item.thumbnail" alt="Альт">
		</a>
		<div class="gallery__clear"></div>
		<div class="gallery__clear"></div>
		<div class="gallery__clear"></div>
		<div class="gallery__clear"></div>
		<div class="gallery__clear"></div>
	</div>
</template>

<script>

	export default {
		props: ['gallery'],
		name: 'gallery',
		data () {
			return {
				
			}
		},
		components: {
			
		},	
	}
</script>

<style lang="scss">
	.gallery {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 30px;
		justify-content: space-between;
		&__thumb {
			transition: 0.3s all;
			width: calc(100% / 6 - 20px);
			margin-bottom: 20px;
			height: auto;
			@include r(900) {
				width: calc(33% - 10px);
			}
			img {
				display: block;
				width: 100%;
				height: auto;
			}
			&:hover {
				cursor: pointer;
				opacity: 0.7;
			}
		}
		&__clear {
			width: calc(100% / 6 - 20px);
			height: 0px;
			display: block;
			@include r(900) {
				width: calc(33% - 10px);
			}
		}
	}
</style>

