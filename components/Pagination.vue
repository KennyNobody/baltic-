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

<style lang="scss">
	.pagination {
		color: $light;
		display: inline-flex;
		align-items: center;
		&__link {
			height: 36px;
			display: flex;
			align-items: center;
			border-top: 1px solid $blue;
			border-bottom: 1px solid $blue;
			cursor: pointer;
			padding-left: 12px;
			padding-right: 12px;
			transition: 0.3s all;
			&:first-child {
				border-left: 1px solid $blue;
			}
			&:last-child {
				border-right: 1px solid $blue;
			}
			svg {
				height: 14px;
				width: 8px;
			}
			&:hover {
				background-color: $blue;
			}
			&--next {
				svg {
					transform: rotate(180deg);
				}
			}
			&--now {
				background-color: $light;
				height: 44px;
				color: $dark;
				pointer-events: none;
			}
			&--static {
				pointer-events: none;
			}
		}
	}
</style>

