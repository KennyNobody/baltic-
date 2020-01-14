<template>
	<div class="pagination">
		<div class="pagination__link pagination__link--prev">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
		<div class="pagination__link pagination__link--now">
			1
		</div>
		<div class="pagination__link">
			2
		</div>
		<div class="pagination__link">
			3
		</div>
		<div class="pagination__link pagination__link--static">
			...
		</div>
		<div class="pagination__link">
			13
		</div>
		<div class="pagination__link pagination__link--next">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'pagination',
		data () {
			return {
				
			}
		},
		components: {
			
		}
	}
</script>
