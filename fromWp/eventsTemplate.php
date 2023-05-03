<?php
/**
 * Template Name: Events
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package libira
 */


// Подключаем CSS для главной страницы
if(ICL_LANGUAGE_CODE != 'he')
    wp_enqueue_style( 'page-brewery-style', get_template_directory_uri() . '/css/events.css', array(), _S_VERSION, 'all' );
else
    wp_enqueue_style( 'page-brewery-style', get_template_directory_uri() . '/css/rtl/events.css', array(), _S_VERSION, 'all' );


$galSlider = get_field('gallery_slider_image');
get_header('v2');
?>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>


<div id="libira">

    <style>
        html {
            margin: 0 !important;
        }

        html, body {
            height: auto;
        }
    </style>

    <div class='libira__inner slAdBarBugFix'>

        <?php
        //    Подключаем темплейт меню
        get_template_part('template-parts/menu', 'desktop'); # для десктопа
        get_template_part('template-parts/menu', 'mobile'); # для мобильной версии
        ?>

        <div class='libira__static-back-img active d-flex align-items-center justify-content-center flex-column'  style='background-image: url(<?php the_field('events_bg'); ?>);'>


                <div class='libira__button-frame d-flex align-items-center justify-content-center text-center'>
                    <span><?php the_field('events_title'); ?></span>
                    <svg preserveAspectRatio='none' width='100%' height='100%' viewBox='0 0 359 103' fill='none'  xmlns='http://www.w3.org/2000/svg'>
                        <path class='libira__button-frame-left' d='M179.5 6.64844H358V101.001H179.5' stroke='white' stroke-width='2'/>
                        <path class='libira__button-frame-right' d='M179.5 1H1V95.3529H179.5' stroke='white' stroke-width='2'/>
                    </svg>
                </div>
                <div class="libiraSEOText">
                    <?php the_field('events_text') ?>
                </div>



        </div>

        <!--<div class='libira__static-back-scroll'>
            <div class='libira__static-back-scroll-dots'>
                <div class='libira__static-back-scroll-dots-item'></div>
                <div class='libira__static-back-scroll-dots-item'></div>
            </div>

            <div class='libira__static-back-scroll-text'>scroll</div>
        </div>-->
    </div>


		<div class="libira__few-words">
    <div class="libira__header-block text-sm-center">
        <h2><?php the_field('wordevents_title'); ?></h2>
    </div>
    <div class="libira__few-words-content">
        <div class="row">
            <div class="col-6">
                <p><?php the_field('wordevents_leftcol'); ?></p>
            </div>
            <div class="col-6">
                <p><?php the_field('wordevents_rightcol') ?></p>
            </div>
        </div>
    </div>
</div>

    <?php get_template_part('template-parts/events', 'slider'); ?>




    <?php get_template_part('template-parts/events', 'slider2'); ?>


<?php /*
    <div class="libira__events-informer informer__1">
        <div class="libira__radish libira__radish-item13">
            <img src="<?php echo get_template_directory_uri(); ?>/img/radish.png">
        </div>
        <div class="libira__events-informer-wrap">
            <div class="row">
                <div class="col-7">

                    <div class="libira__events-informer-screen">
                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name1'); ?></h5>
                                <h2><?php the_field('number_of_seats'); ?> <?php _e('guests', 'libira'); ?></h2>
                                <p><?php the_field('number_of_seats_description'); ?></p>
                            </div>
                        </div>

                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name1'); ?></h5>
                                <h2><?php the_field('floor_area'); ?> <?php _e('floor area (S.M.)', 'libira'); ?></h2>
                                <p><?php the_field('floor_area_description'); ?></p>
                            </div>
                        </div>

                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name1'); ?></h5>
                                <h2><?php the_field('price_per_hour') ?> <?php _e('price per hour', 'libira'); ?></h2>
                                <p><?php the_field('price_per_hour_description'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="libira__events-informer-trigger d-flex flex-column justify-content-center">
                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('number_of_seats'); ?></h2>
                            <h5><?php _e('number of seats', 'libira'); ?></h5>
                        </div>

                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('floor_area'); ?></h2>
                            <h5><?php _e('floor area (S.M.)', 'libira'); ?>)</h5>
                        </div>

                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('price_per_hour') ?>$</h2>
                            <h5><?php _e('price per hour', 'libira'); ?></h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="libira__events-informer informer__2 libira__events-informer--revers">
        <div class="libira__radish libira__radish-item13">
            <img src="<?php echo get_template_directory_uri(); ?>/img/radish.png">
        </div>
        <div class="libira__events-informer-wrap">
            <div class="row">
                <div class="col-5">

                    <div class="libira__events-informer-trigger d-flex flex-column justify-content-center">
                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('number_of_seats2'); ?></h2>
                            <h5><?php _e('number of seats', 'libira'); ?></h5>
                        </div>

                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('floor_area2'); ?></h2>
                            <h5><?php _e('floor area (S.M.)', 'libira'); ?></h5>
                        </div>

                        <div class="libira__events-informer-trigger-item">
                            <h2><?php the_field('price_per_hour2') ?></h2>
                            <h5><?php _e('price per hour', 'libira'); ?></h5>
                        </div>
                    </div>

                </div>
                <div class="col-7">

                    <div class="libira__events-informer-screen">
                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name2'); ?></h5>
                                <h2><?php the_field('number_of_seats2'); ?> <?php _e('guests', 'libira'); ?></h2>
                                <p><?php the_field('number_of_seats_description2'); ?></p>
                            </div>
                        </div>

                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name2'); ?></h5>
                                <h2><?php the_field('floor_area2'); ?> <?php _e('floor area (S.M.)', 'libira'); ?></h2>
                                <p><?php the_field('floor_area_description2'); ?></p>
                            </div>
                        </div>

                        <div class="libira__events-informer-screen-item align-items-center">
                            <div class="libira__events-informer-screen-item-wrap">
                                <h5><?php the_field('hall_name2'); ?></h5>
                                <h2><?php the_field('price_per_hour2') ?> <?php _e('price per hour', 'libira'); ?></h2>
                                <p><?php the_field('price_per_hour_description2'); ?></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
*/
?>


    <div class="libira__mobile-events-informer">
        <div class="libira__radish libira__radish-item13">
            <img src="<?php echo get_template_directory_uri(); ?>/img/radish.png">
        </div>
        <div class="libira__mobile-events-informer-wrap">
						<?php
$slider_id = "slider";
if( have_rows($slider_id) ):
// Load sub field value.
$slider = get_field($slider_id);

else :
    echo "";
endif;
?>


            <div class="libira__mobile-events-informer-content">
                <div class="row no-gutters align-items-start justify-content-between ">

<?php
    foreach($slider as $slide):
?>


                    <div class="col-auto">

                        <div class="libira__mobile-events-informer-item">
                            <h2>
								<?php echo $slide['lbtitle'] ?>
								<?php //echo $slide['rbvalue'] ?>
							</h2>
                            <div class="libira__mobile-events-informer-item-text"><?php// echo $slide['rbtext'] ?></div>
                        </div>

                    </div>

<?php
    endforeach;
?>

                </div>
            </div>
			            <div class="libira__header-block">


			<?php
    foreach($slider as $slide):


?>

                <div class="libira__header-block-item">
                    <h5><?php echo $slide['lbt'] ?></h5>
                    <h2><?php //echo $slide['lbtitle'] ?></h2>
					<div style="display:flex; align-items:center;justify-content:space-between; margin-bottom: 20px;">
															<h4 style="font-size: 28px;">
							<?php echo $slide['rbvalue'] ?></h4>
                        <h4 style="font-size: 28px;"><?php echo $slide['rbtext'] ?></h4>
							</div>
                    <p style="font-size: 20px;"><?php echo $slide['lbtext'] ?></p>
                </div>

<?php
    endforeach;
?>

            </div>
        </div>
    </div>



    <div class="libira__fither">
        <div class="libira__radish libira__radish-item12">
            <img src="<?php echo get_template_directory_uri(); ?>/img/radish.png">
        </div>
        <div class="libira__fither-content d-flex align-items-center justify-content-center">
            <div class="libira__fither-imgs">
                <div class="libira__fither-imgs-item libira__fither-imgs-item--style1">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/fither-img1.jpg">
                </div>
                <div class="libira__fither-imgs-item libira__fither-imgs-item--style2">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/fither-img2.jpg">
                </div>
                <div class="libira__fither-imgs-item libira__fither-imgs-item--style3">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/fither-img3.jpg">
                </div>
                <div class="libira__fither-imgs-item libira__fither-imgs-item--style4">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/fither-img4.jpg">
                </div>
                <div class="libira__fither-imgs-item libira__fither-imgs-item--style5">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/fither-img5.jpg">
                </div>
            </div>

            <div class="libira__fither-slyder">
                <div class="swiper-container swiper-container--fither">
                    <div class="swiper-wrapper">
                        <?php foreach ($galSlider as $slide) : ?>
                            <div class="swiper-slide">
                                <div class="libira__fither-slyder-item d-flex align-items-center justify-content-center">
                                    <img src="<?php echo $slide['url'] ?>">
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="swiper-button-prev swiper-button-prev--fither">
                    <svg width="54" height="19" viewBox="0 0 54 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.48542 0.999094L16.9707 9.48438L8.48542 17.9697" stroke="white"
                              stroke-width="2"></path>
                        <path d="M53.9707 9.48438H22.9707" stroke="white"></path>
                    </svg>
                </div>
                <div class="swiper-button-next swiper-button-next--fither">
                    <svg width="54" height="19" viewBox="0 0 54 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.48542 0.999094L16.9707 9.48438L8.48542 17.9697" stroke="white"
                              stroke-width="2"></path>
                        <path d="M53.9707 9.48438H22.9707" stroke="white"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="libira__want-to-taste">
        <div class="libira__want-to-taste-content">
            <div class="libira__square-lines"></div>
            <div class="libira__header-block text-center">
                <h3><?php the_field('block_header_get_in_touch'); ?></h3>
            </div>
        </div>

        <div class="libira__want-to-taste-button text-center">
            <div class="libira__more libira__more--red d-inline-block">
                <a href="#<?php //echo the_field('button_link') ?>"
                   class="libira__more-link d-flex align-items-center justify-content-center text-center libiraContactOpen">
                    <span><?php echo the_field('button_text_book_a_table')?></span>
                </a>
                <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 191 50" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="190" height="49" stroke="white"></rect>
                </svg>
            </div>
        </div>
</div>

<?php
get_footer('v2');
