<template>
    <div class="ti-actionsheet">
        <transition name="fade">
            <div class="actionsheet-mark" v-show="show" @click="clickMask"></div>
        </transition>
        <transition name="popup">
            <div class="actionsheet-main" v-show="show">
                <div class="actionsheet-content">
                    <div class="actionsheet-title" v-show="showTitle">
                        <div class="actionsheet-title-item item" v-html="title"></div>
                    </div>
                    <div class="actionsheet-menu">
                        <div class="actionsheet-menu-item item" v-for="(menuItemName,menuIndex) in menus"
                             @click="clickMenu(menuIndex)" v-html="menuItemName.label"></div>
                    </div>
                    <div class="actionsheet-cencel" v-show="showCancel">
                        <div class="actionsheet-cancel-item item" @click="clickCancel" v-html="cancelText"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
	export default {
		name:'actionsheet',
		props: {
			value: {
				type: Boolean,
                default:false
			},
			title: {
				type: String,
			},
			showCancel: {
				type: Boolean,
				default: false
			},
            cancelText:{
				type:String,
                default:'取消'
            },
			menus: {
				type: Array,
				default: () => []
			},
			closeMask: {
				type: Boolean,
				default: true
			},
			closeMenu: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			showTitle() {
				return this.title && this.title.length > 0;
			}
		},
		data() {
			return {
				show: this.value
			}
		},
		methods: {
			clickMask() {
				if(this.closeMask){
					this.closeActionSheet();
                }
			},
			clickCancel() {
				this.closeActionSheet();
				this.$emit('onCancel');
			},
			onShow() {
				this.$emit('onShow');
			},
			onHide() {
				this.$emit('onHide');
			},
			clickMenu(index) {
				if(this.closeMenu){
					this.closeActionSheet();
					this.$emit('clickMenu',index);
				}
			},
            closeActionSheet(){
			    this.show = false;
            },
		},
		watch: {
			value: {
				handler(val) {
					this.show = val;
				},
				immediate:true
			},
			show: {
				handler(val) {
					this.$emit('input',val);
					if (val) {
						this.onShow();
					} else {
						this.onHide();
					}
				},
				immediate: true
			}
		}
	}
</script>
<style lang="less">
    @import '../style/widget/actionsheet';
</style>