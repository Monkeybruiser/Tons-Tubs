<?php

    include('modules/layout/header.php' );


    $product_image              = true;
    if($product_image) {
        $product_image_alt      = '#';
        $product_image_url      = 'library/images/_tmp/img-prod-001.jpg';
    }
    $product_name               = 'Tub name here';
    $product_desc               = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, nibh et porttitor consectetur, massa ligula sodales nulla, vel faucibus eros diam eu nisi. Vestibulum nec sapien vel leo vestibulum lobortis. Nam dui neque, lobortis non sagittis nec, venenatis at libero. Sed at libero libero.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, nibh et porttitor consectetur, massa ligula sodales nulla, vel faucibus eros diam eu nisi. Vestibulum nec sapien vel leo vestibulum lobortis. Nam dui neque, lobortis non sagittis nec, venenatis at libero. Sed at libero libero.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, nibh et porttitor consectetur, massa ligula sodales nulla, vel faucibus eros diam eu nisi. Vestibulum nec sapien vel leo vestibulum lobortis. Nam dui neque, lobortis non sagittis nec, venenatis at libero. Sed at libero libero.</p>';
    $product_url                = '#';

?>

<section class="mid">

    <div class="wrap">

        <div class="grid">

            <div class="grid__col grid__col--1-of-2 grid__col--m-1-of-1 grid__col--l-1-of-1">

                <div class="product">

                    <?php

                        if($product_image) {

                    ?>
                    <div class="product--image">
                        <img alt="<?php echo $product_image_alt; ?>" src="<?php echo $product_image_url; ?>" />
                    </div>
                    <?php

                        }

                    ?>

                </div>

            </div>

            <div class="grid__col grid__col--d-first grid__col--1-of-2 grid__col--m-1-of-1 grid__col--l-1-of-1">

                <div class="product">

                    <h1 class="product--title"><?php echo $product_name; ?></h1>
                    <?php

                        if($product_desc) {

                    ?>
                    <div class="product--desc">
                        <?php echo $product_desc; ?>
                    </div>
                    <?php

                        }

                    ?>
                    <p class="button-wrap"><a href="/" title="View all our tubs!"><span>View all tubs</span></a></p>

                </div>

            </div>

        </div>

    </div>

</section>

<?php

    include('modules/layout/footer.php' );

?>
