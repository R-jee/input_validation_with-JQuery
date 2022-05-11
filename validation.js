$("#close___model__btn__id_1").on('click', function() {
            location.reload();
        });
        $("#close___model__btn__id_2").on('click', function() {
            location.reload();
        });
        jQuery('#feed-name-input-id').keyup(function() {
            this.value = this.value.replace(/[^0-9a-zA-Z\-\_]/g, '');
        });
