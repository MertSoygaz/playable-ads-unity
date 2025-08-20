if ( TRACE ) { TRACE( JSON.parse( '["AnimateHoop#Start","AnimateHoop#Animate","AnimateHoop#MoveBoth","AnimateHoop#OnDestroy","BallSpawner#init","BallSpawner#Awake","BallSpawner#Start","BallSpawner#AssignBall","BallSpawner#Run","BallSpawner#IsOutOfView","ButtonScripts#OnInstallClicked","ButtonScripts#TryAgainAndOnInstall","CameraBoundsColliders#UpdateBounds","CameraBoundsColliders#Start","Depth#init","Depth#Awake","Depth#Start","Depth#LateUpdate","Depth#ResetNetColliders","Depth#ResetSortingOrder","Depth#SetNetColliders","DragThrow#init","DragThrow#Start","DragThrow#Update","DragThrow#TryGetPointer","DragThrow#Fail","DragThrow#ResetBall","HandAnimation#init","HandAnimation#Start","HandAnimation#Update","HandAnimation#AnimateLoop","HandAnimation#MoveLocalY","HandAnimation#FadeToAlpha","HandAnimation#StopAndDestroy","HandAnimation#DestroyAfterFade","LevelFailManager#init","LevelFailManager#Start","LevelFailManager#Update","LevelFailManager#CheckOrientationAndDoAction","LevelFailManager#FadeCanvas","LevelUpManager#init","LevelUpManager#Start","LevelUpManager#Update","LevelUpManager#CheckOrientationAndDoAction","LevelUpManager#FadeCanvas","OrientationManager#Start","OrientationManager#Update","OrientationManager#CheckOrientation","Score#init","Score#Start","Score#OnTriggerEnter2D","Score#ResetBallState","Score#UpdateScoreText"]' ) ); }
/**
 * @version 1.0.9363.24934
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AnimateHoop start.*/
    Bridge.define("AnimateHoop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            net: null,
            board: null,
            timeToRight: 0,
            timeRightToLeft: 0,
            moveRange: 0,
            animateCo: null
        },
        methods: {
            /*AnimateHoop.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AnimateHoop#Start", this ); }

                var isPortrait = UnityEngine.Screen.height > UnityEngine.Screen.width;

                if (isPortrait) {
                    this.timeToRight = 0.75;
                    this.timeRightToLeft = 1.5;
                } else {
                    this.timeToRight = 3.75;
                    this.timeRightToLeft = 7.5;
                }

                var camHalfWidth = UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect;
                this.moveRange = camHalfWidth - 1.0;

                this.animateCo = this.StartCoroutine$1(this.Animate());
            },
            /*AnimateHoop.Start end.*/

            /*AnimateHoop.Animate start.*/
            Animate: function () {
if ( TRACE ) { TRACE( "AnimateHoop#Animate", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startNetPos,
                    startBoardPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startNetPos = this.net.position.$clone();
                                        startBoardPos = this.board.position.$clone();

                                        // İlk başta X = 0’dan başlasın
                                        this.net.position = new pc.Vec3( 0.0, startNetPos.y, startNetPos.z );
                                        this.board.position = new pc.Vec3( 0.0, startBoardPos.y, startBoardPos.z );

                                        // İlk sağa gidiş
                                        $enumerator.current = this.MoveBoth(this.net, this.board, this.moveRange, this.timeToRight);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // Sonsuz sağ-sol döngüsü
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = this.MoveBoth(this.net, this.board, -this.moveRange, this.timeRightToLeft);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = this.MoveBoth(this.net, this.board, this.moveRange, this.timeRightToLeft);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnimateHoop.Animate end.*/

            /*AnimateHoop.MoveBoth start.*/
            MoveBoth: function (t1, t2, targetX, duration) {
if ( TRACE ) { TRACE( "AnimateHoop#MoveBoth", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start1,
                    start2,
                    end1,
                    end2,
                    t,
                    u,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start1 = t1.position.$clone();
                                        start2 = t2.position.$clone();

                                        end1 = new pc.Vec3( targetX, start1.y, start1.z );
                                        end2 = new pc.Vec3( targetX, start2.y, start2.z );

                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        u = Math.max(0, Math.min(1, t / duration)); // Linear ease
                                        t1.position = new pc.Vec3().lerp( start1, end1, u );
                                        t2.position = new pc.Vec3().lerp( start2, end2, u );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    t1.position = end1.$clone();
                                        t2.position = end2.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnimateHoop.MoveBoth end.*/

            /*AnimateHoop.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "AnimateHoop#OnDestroy", this ); }

                if (this.animateCo != null) {
                    this.StopCoroutine$2(this.animateCo);
                }
            },
            /*AnimateHoop.OnDestroy end.*/


        }
    });
    /*AnimateHoop end.*/

    /*BallSpawner start.*/
    Bridge.define("BallSpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                maxResets: 0,
                returnDelay: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BallSpawner#init", this ); }

                    this.maxResets = 9;
                    this.returnDelay = 0.1;
                }
            }
        },
        fields: {
            firstBall: null,
            firstBallRb: null,
            firstBallDragThrow: null,
            firstBallDepth: null,
            currentBall: null,
            currentRb: null,
            currentDragThrow: null,
            currentDepth: null,
            cam: null,
            resetCount: 0
        },
        methods: {
            /*BallSpawner.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BallSpawner#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.Rigidbody2D))) {
                    this.enabled = false;
                    return;
                }
            },
            /*BallSpawner.Awake end.*/

            /*BallSpawner.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallSpawner#Start", this ); }

                this.cam = UnityEngine.Camera.main;
                this.AssignBall(this.firstBall, this.firstBallRb, this.firstBallDragThrow, this.firstBallDepth);
                this.StartCoroutine$1(this.Run());
            },
            /*BallSpawner.Start end.*/

            /*BallSpawner.AssignBall start.*/
            AssignBall: function (ball, rb, drag, depth) {
if ( TRACE ) { TRACE( "BallSpawner#AssignBall", this ); }

                this.currentBall = ball;
                this.currentRb = rb;
                this.currentDragThrow = drag;
                this.currentDepth = depth;
            },
            /*BallSpawner.AssignBall end.*/

            /*BallSpawner.Run start.*/
            Run: function () {
if ( TRACE ) { TRACE( "BallSpawner#Run", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    score,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( UnityEngine.Object.op_Implicit(this.currentBall) ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 1: {
                                    if ( !UnityEngine.Object.op_Implicit(this.currentRb) || !this.currentRb.simulated || this.currentRb.velocity.lengthSq() <= 0.01 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if ( !this.IsOutOfView(this.currentBall.transform.position) ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(BallSpawner.returnDelay);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    if (this.resetCount < BallSpawner.maxResets) {
                                            $step = 9;
                                            continue;
                                        } else  {
                                            $step = 10;
                                            continue;
                                        }
                                }
                                case 9: {
                                    if (UnityEngine.Object.op_Implicit(this.currentDragThrow)) {
                                            this.currentDragThrow.ResetBall(new pc.Vec3( 0.0, -3.58, -3.0 ));
                                        } else {
                                            this.currentRb.simulated = false;
                                            this.currentRb.velocity = pc.Vec2.ZERO.clone();
                                            this.currentBall.transform.position = new pc.Vec3( 0.0, -3.58, -3.0 );
                                        }

                                        score = UnityEngine.Object.FindObjectOfType(Score);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(score, null)) {
                                            score.ResetBallState(this.currentBall);
                                        }

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.currentDepth, null)) {
                                            this.currentDepth.ResetNetColliders();
                                            this.currentDepth.ResetSortingOrder();
                                        }

                                        this.resetCount = (this.resetCount + 1) | 0;
                                    $step = 11;
                                    continue;
                                }
                                case 10: {
                                    UnityEngine.MonoBehaviour.Destroy(this.currentBall);
                                        return false;
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BallSpawner.Run end.*/

            /*BallSpawner.IsOutOfView start.*/
            IsOutOfView: function (pos) {
if ( TRACE ) { TRACE( "BallSpawner#IsOutOfView", this ); }

                if (!UnityEngine.Object.op_Implicit(this.cam)) {
                    return false;
                }
                var v = this.cam.WorldToViewportPoint(pos);
                return v.z < 0.0 || v.x < -0.1 || v.x > 1.1 || v.y < -0.1 || v.y > 1.1;
            },
            /*BallSpawner.IsOutOfView end.*/


        }
    });
    /*BallSpawner end.*/

    /*ButtonScripts start.*/
    Bridge.define("ButtonScripts", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ButtonScripts.OnInstallClicked start.*/
            OnInstallClicked: function () {
if ( TRACE ) { TRACE( "ButtonScripts#OnInstallClicked", this ); }

                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.Analytics.LogEvent$1("User completed level and CTA", 1);
            },
            /*ButtonScripts.OnInstallClicked end.*/

            /*ButtonScripts.TryAgainAndOnInstall start.*/
            TryAgainAndOnInstall: function () {
if ( TRACE ) { TRACE( "ButtonScripts#TryAgainAndOnInstall", this ); }

                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.Analytics.LogEvent$1("User failed level and CTA", 0);
                Luna.Unity.LifeCycle.GameEnded();
            },
            /*ButtonScripts.TryAgainAndOnInstall end.*/


        }
    });
    /*ButtonScripts end.*/

    /*CameraBoundsColliders start.*/
    Bridge.define("CameraBoundsColliders", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            topCollider: null,
            leftCollider: null,
            rightCollider: null
        },
        methods: {
            /*CameraBoundsColliders.UpdateBounds start.*/
            UpdateBounds: function () {
if ( TRACE ) { TRACE( "CameraBoundsColliders#UpdateBounds", this ); }

                // Kameran�n d�nyadaki boyutlar�n� al
                var height = this.cam.orthographicSize * 2.0;
                var width = height * this.cam.aspect;

                // Kameran�n merkez noktas�
                var camPos = this.cam.transform.position.$clone();

                // Top collider pozisyon
                this.topCollider.size = new pc.Vec2( width, 1.0 ); // kal�nl�k ayar�
                this.topCollider.transform.localPosition = new pc.Vec3( camPos.x, camPos.y + (height / 2.0) + this.topCollider.size.y / 2.0, 0 );
                this.topCollider.offset = pc.Vec2.ZERO.clone();


                // Left collider pozisyon
                this.leftCollider.size = new pc.Vec2( 1.0, height );
                this.leftCollider.transform.localPosition = new pc.Vec3( camPos.x - (width / 2.0) - this.leftCollider.size.x / 2, camPos.y, 0 );
                this.leftCollider.offset = pc.Vec2.ZERO.clone();

                // Right collider pozisyon
                this.rightCollider.size = new pc.Vec2( 1.0, height );
                this.rightCollider.transform.localPosition = new pc.Vec3( camPos.x + (width / 2.0) + this.rightCollider.size.x / 2, camPos.y, 0 );
                this.rightCollider.offset = pc.Vec2.ZERO.clone();
            },
            /*CameraBoundsColliders.UpdateBounds end.*/

            /*CameraBoundsColliders.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraBoundsColliders#Start", this ); }

                this.UpdateBounds();
            },
            /*CameraBoundsColliders.Start end.*/


        }
    });
    /*CameraBoundsColliders end.*/

    /*Depth start.*/
    Bridge.define("Depth", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballRb: null,
            board: null,
            net: null,
            ball: null,
            minY: 0,
            maxY: 0,
            maxScale: 0,
            minScale: 0,
            netColliders: null,
            backOrder: 0,
            midOrder: 0,
            frontOrder: 0,
            prevY: 0,
            currentScale: 0,
            forceColliderOff: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Depth#init", this ); }

                this.minY = -3.58;
                this.maxY = 5.0;
                this.maxScale = 0.22;
                this.minScale = 0.18;
                this.backOrder = 0;
                this.midOrder = 1;
                this.frontOrder = 2;
                this.forceColliderOff = true;
            }
        },
        methods: {
            /*Depth.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Depth#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(this.ballRb)) {
                    this.ballRb = this.GetComponent(UnityEngine.Rigidbody2D);
                }
                if (!UnityEngine.Object.op_Implicit(this.ball)) {
                    this.ball = this.GetComponent(UnityEngine.SpriteRenderer);
                }
                if (UnityEngine.Object.op_Implicit(this.net)) {
                    this.netColliders = this.net.GetComponents(UnityEngine.Collider2D);
                }
            },
            /*Depth.Awake end.*/

            /*Depth.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Depth#Start", this ); }

                var t0 = pc.math.inverseLerp(this.minY, this.maxY, this.transform.position.y);
                this.currentScale = pc.math.lerp(this.maxScale, this.minScale, t0);
                this.transform.localScale = new pc.Vec3( this.currentScale, this.currentScale, 1.0 );
                this.prevY = this.transform.position.y;

                this.ResetNetColliders();
                this.ResetSortingOrder();
            },
            /*Depth.Start end.*/

            /*Depth.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Depth#LateUpdate", this ); }

                var t = pc.math.inverseLerp(this.minY, this.maxY, this.transform.position.y);
                var target = pc.math.lerp(this.maxScale, this.minScale, t);
                this.currentScale = UnityEngine.Mathf.Min(this.currentScale, target);
                this.transform.localScale = new pc.Vec3( this.currentScale, this.currentScale, 1.0 );

                var vy = UnityEngine.Object.op_Implicit(this.ballRb) ? this.ballRb.velocity.y : (this.transform.position.y - this.prevY) / UnityEngine.Mathf.Max(UnityEngine.Time.deltaTime, 0.0001);

                if (this.forceColliderOff) {
                    this.SetNetColliders(false);
                    if (vy > 0.001) {
                        this.forceColliderOff = false;
                    }
                } else if (vy > 0.001) {
                    this.board.sortingOrder = this.backOrder;
                    this.net.sortingOrder = this.midOrder;
                    this.ball.sortingOrder = this.frontOrder;
                    this.SetNetColliders(false);
                } else if (vy < -0.001) {
                    this.board.sortingOrder = this.backOrder;
                    this.ball.sortingOrder = this.midOrder;
                    this.net.sortingOrder = this.frontOrder;
                    this.SetNetColliders(true);
                }

                this.prevY = this.transform.position.y;
            },
            /*Depth.LateUpdate end.*/

            /*Depth.ResetNetColliders start.*/
            ResetNetColliders: function () {
if ( TRACE ) { TRACE( "Depth#ResetNetColliders", this ); }

                this.SetNetColliders(false);
                this.forceColliderOff = true;
            },
            /*Depth.ResetNetColliders end.*/

            /*Depth.ResetSortingOrder start.*/
            ResetSortingOrder: function () {
if ( TRACE ) { TRACE( "Depth#ResetSortingOrder", this ); }

                this.board.sortingOrder = this.backOrder;
                this.net.sortingOrder = this.midOrder;
                this.ball.sortingOrder = this.frontOrder;
            },
            /*Depth.ResetSortingOrder end.*/

            /*Depth.SetNetColliders start.*/
            SetNetColliders: function (enabled) {
if ( TRACE ) { TRACE( "Depth#SetNetColliders", this ); }

                if (this.netColliders == null) {
                    return;
                }
                for (var i = 0; i < this.netColliders.length; i = (i + 1) | 0) {
                    this.netColliders[i].enabled = enabled;
                }
            },
            /*Depth.SetNetColliders end.*/


        }
    });
    /*Depth end.*/

    /*DragThrow start.*/
    Bridge.define("DragThrow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            touchArea: null,
            forceMultiplier: 0,
            maxSpeed: 0,
            arcBoost: 0,
            minDragDist: 0,
            dragStart: null,
            dragging: false,
            thrown: false,
            cam: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragThrow#init", this ); }

                this.dragStart = new UnityEngine.Vector2();
                this.forceMultiplier = 8.0;
                this.maxSpeed = 18.0;
                this.arcBoost = 3.0;
                this.minDragDist = 0.15;
            }
        },
        methods: {
            /*DragThrow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DragThrow#Start", this ); }

                this.cam = UnityEngine.Camera.main;
                this.rb.simulated = false;
                this.rb.velocity = pc.Vec2.ZERO.clone();
            },
            /*DragThrow.Start end.*/

            /*DragThrow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragThrow#Update", this ); }

                if (this.thrown) {
                    return;
                }
                var began = { };
                var ended = { };
                var worldPos = { v : new UnityEngine.Vector2() };

                if (!this.TryGetPointer(began, ended, worldPos)) {
                    return;
                }

                if (began.v) {
                    if (UnityEngine.Object.op_Implicit(this.touchArea) && !this.touchArea.OverlapPoint(worldPos.v)) {
                        return;
                    }
                    this.dragging = true;
                    this.dragStart = worldPos.v.$clone();
                } else if (ended.v && this.dragging) {
                    this.dragging = false;
                    var dragVec = worldPos.v.$clone().sub( this.dragStart );
                    if (dragVec.length() < this.minDragDist) {
                        return;
                    }

                    var dir = dragVec.clone().normalize().$clone();
                    var speed = UnityEngine.Mathf.Min(dragVec.length() * this.forceMultiplier, this.maxSpeed);
                    var v = dir.$clone().scale( speed );
                    v.y += this.arcBoost;

                    this.rb.simulated = true;
                    this.rb.velocity = v.$clone();
                    this.thrown = true;
                }
            },
            /*DragThrow.Update end.*/

            /*DragThrow.TryGetPointer start.*/
            TryGetPointer: function (began, ended, worldPos) {
if ( TRACE ) { TRACE( "DragThrow#TryGetPointer", this ); }

                began.v = (ended.v = false);
                var screenPos = pc.Vec2.ZERO.clone();

                if (UnityEngine.Input.touchCount === 0) {
                    return this.Fail(worldPos);
                }
                var t = UnityEngine.Input.GetTouch(0);
                began.v = t.phase === UnityEngine.TouchPhase.Began;
                ended.v = t.phase === UnityEngine.TouchPhase.Ended || t.phase === UnityEngine.TouchPhase.Canceled;
                screenPos = t.position.$clone();
                if (!(began.v || ended.v)) {
                    return this.Fail(worldPos);
                }
                if (!this.cam.pixelRect.Contains(screenPos) || !isFinite(screenPos.x) || !isFinite(screenPos.y)) {
                    return this.Fail(worldPos);
                }

                worldPos.v = UnityEngine.Vector2.FromVector3(this.cam.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(screenPos)));
                return true;
            },
            /*DragThrow.TryGetPointer end.*/

            /*DragThrow.Fail start.*/
            Fail: function (pos) {
if ( TRACE ) { TRACE( "DragThrow#Fail", this ); }

                pos.v = pc.Vec2.ZERO.clone();
                return false;
            },
            /*DragThrow.Fail end.*/

            /*DragThrow.ResetBall start.*/
            ResetBall: function (pos) {
if ( TRACE ) { TRACE( "DragThrow#ResetBall", this ); }

                this.transform.position = pos.$clone();
                this.rb.simulated = false;
                this.rb.velocity = pc.Vec2.ZERO.clone();
                this.dragging = false;
                this.thrown = false;
            },
            /*DragThrow.ResetBall end.*/


        }
    });
    /*DragThrow end.*/

    /*HandAnimation start.*/
    Bridge.define("HandAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spriteRenderer: null,
            moveDuration: 0,
            fadeDuration: 0,
            startY: 0,
            endY: 0,
            loopCo: null,
            isStopping: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HandAnimation#init", this ); }

                this.moveDuration = 1.5;
                this.fadeDuration = 0.3;
                this.startY = -4.0;
                this.endY = -1.0;
            }
        },
        methods: {
            /*HandAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HandAnimation#Start", this ); }

                this.spriteRenderer = this.GetComponent(UnityEngine.SpriteRenderer);

                // Ba�lang�� konumu
                var lp = this.transform.localPosition.$clone();
                this.transform.localPosition = new pc.Vec3( lp.x, this.startY, lp.z );

                // Tam g�r�n�r ba�las�n
                var c = this.spriteRenderer.color.$clone();
                this.spriteRenderer.color = new pc.Color( c.r, c.g, c.b, 1.0 );

                this.loopCo = this.StartCoroutine$1(this.AnimateLoop());
            },
            /*HandAnimation.Start end.*/

            /*HandAnimation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HandAnimation#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonUp(0) || (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Ended)) {
                    this.StopAndDestroy();
                }
            },
            /*HandAnimation.Update end.*/

            /*HandAnimation.AnimateLoop start.*/
            AnimateLoop: function () {
if ( TRACE ) { TRACE( "HandAnimation#AnimateLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    lp,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = this.MoveLocalY(this.endY, this.moveDuration);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.FadeToAlpha(0.0, this.fadeDuration);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    lp = this.transform.localPosition.$clone();
                                        this.transform.localPosition = new pc.Vec3( lp.x, this.startY, lp.z );
                                        $enumerator.current = this.FadeToAlpha(1.0, this.fadeDuration);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HandAnimation.AnimateLoop end.*/

            /*HandAnimation.MoveLocalY start.*/
            MoveLocalY: function (targetY, duration) {
if ( TRACE ) { TRACE( "HandAnimation#MoveLocalY", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    startPos,
                    endPos,
                    u,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                        startPos = this.transform.localPosition.$clone();
                                        endPos = new pc.Vec3( startPos.x, targetY, startPos.z );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        u = Math.max(0, Math.min(1, t / duration));
                                        this.transform.localPosition = new pc.Vec3().lerp( startPos, endPos, u );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.localPosition = endPos.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HandAnimation.MoveLocalY end.*/

            /*HandAnimation.FadeToAlpha start.*/
            FadeToAlpha: function (targetAlpha, duration) {
if ( TRACE ) { TRACE( "HandAnimation#FadeToAlpha", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    start,
                    startA,
                    u,
                    a,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                        start = this.spriteRenderer.color.$clone();
                                        startA = start.a;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        u = Math.max(0, Math.min(1, t / duration));
                                        a = pc.math.lerp(startA, targetAlpha, u);
                                        this.spriteRenderer.color = new pc.Color( start.r, start.g, start.b, a );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.spriteRenderer.color = new pc.Color( start.r, start.g, start.b, targetAlpha );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HandAnimation.FadeToAlpha end.*/

            /*HandAnimation.StopAndDestroy start.*/
            StopAndDestroy: function () {
if ( TRACE ) { TRACE( "HandAnimation#StopAndDestroy", this ); }

                if (this.isStopping) {
                    return;
                }
                this.isStopping = true;

                if (this.loopCo != null) {
                    this.StopCoroutine$2(this.loopCo);
                }

                this.StartCoroutine$1(this.DestroyAfterFade());
            },
            /*HandAnimation.StopAndDestroy end.*/

            /*HandAnimation.DestroyAfterFade start.*/
            DestroyAfterFade: function () {
if ( TRACE ) { TRACE( "HandAnimation#DestroyAfterFade", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.FadeToAlpha(0.0, this.fadeDuration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*HandAnimation.DestroyAfterFade end.*/


        }
    });
    /*HandAnimation end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LevelFailManager start.*/
    Bridge.define("LevelFailManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            content: null,
            score: null,
            canvasGroup: null,
            ball: null,
            hasFaded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelFailManager#init", this ); }

                this.hasFaded = false;
            }
        },
        methods: {
            /*LevelFailManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LevelFailManager#Start", this ); }

                this.canvasGroup.alpha = 0.0;
                this.content.SetActive(false);
                this.CheckOrientationAndDoAction();
            },
            /*LevelFailManager.Start end.*/

            /*LevelFailManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LevelFailManager#Update", this ); }

                this.CheckOrientationAndDoAction();
            },
            /*LevelFailManager.Update end.*/

            /*LevelFailManager.CheckOrientationAndDoAction start.*/
            CheckOrientationAndDoAction: function () {
if ( TRACE ) { TRACE( "LevelFailManager#CheckOrientationAndDoAction", this ); }

                if (UnityEngine.GameObject.op_Equality(this.ball, null) && this.score.currentScore !== this.score.maxScore && !this.hasFaded) {
                    this.hasFaded = true;
                    this.content.SetActive(true);
                    this.StartCoroutine$1(this.FadeCanvas(this.canvasGroup, 1.0, 1.0));
                    Luna.Unity.Analytics.LogEvent$1("PlayerLost", 0);
                }
            },
            /*LevelFailManager.CheckOrientationAndDoAction end.*/

            /*LevelFailManager.FadeCanvas start.*/
            FadeCanvas: function (cg, targetAlpha, duration) {
if ( TRACE ) { TRACE( "LevelFailManager#FadeCanvas", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAlpha,
                    t,
                    u,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startAlpha = cg.alpha;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        u = Math.max(0, Math.min(1, t / duration));
                                        cg.alpha = pc.math.lerp(startAlpha, targetAlpha, u);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    cg.alpha = targetAlpha;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelFailManager.FadeCanvas end.*/


        }
    });
    /*LevelFailManager end.*/

    /*LevelUpManager start.*/
    Bridge.define("LevelUpManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            content: null,
            score: null,
            canvasGroup: null,
            hasFaded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LevelUpManager#init", this ); }

                this.hasFaded = false;
            }
        },
        methods: {
            /*LevelUpManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LevelUpManager#Start", this ); }

                this.canvasGroup.alpha = 0.0;
                this.content.SetActive(false);
                this.CheckOrientationAndDoAction();
            },
            /*LevelUpManager.Start end.*/

            /*LevelUpManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LevelUpManager#Update", this ); }

                this.CheckOrientationAndDoAction();
            },
            /*LevelUpManager.Update end.*/

            /*LevelUpManager.CheckOrientationAndDoAction start.*/
            CheckOrientationAndDoAction: function () {
if ( TRACE ) { TRACE( "LevelUpManager#CheckOrientationAndDoAction", this ); }

                var isLevelComplete = this.score.currentScore === this.score.maxScore;

                if (isLevelComplete && !this.hasFaded) {
                    this.hasFaded = true;
                    this.content.SetActive(true);
                    this.StartCoroutine$1(this.FadeCanvas(this.canvasGroup, 1.0, 1.0));
                    Luna.Unity.Analytics.LogEvent$1("PlayerWon", 1);
                }
            },
            /*LevelUpManager.CheckOrientationAndDoAction end.*/

            /*LevelUpManager.FadeCanvas start.*/
            FadeCanvas: function (cg, targetAlpha, duration) {
if ( TRACE ) { TRACE( "LevelUpManager#FadeCanvas", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAlpha,
                    t,
                    u,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startAlpha = cg.alpha;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        u = Math.max(0, Math.min(1, t / duration));
                                        cg.alpha = pc.math.lerp(startAlpha, targetAlpha, u);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    cg.alpha = targetAlpha;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LevelUpManager.FadeCanvas end.*/


        }
    });
    /*LevelUpManager end.*/

    /*OrientationManager start.*/
    Bridge.define("OrientationManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            "portraitUI": null,
            "landscapeUI": null,
            isPortrait: false
        },
        methods: {
            /*OrientationManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "OrientationManager#Start", this ); }

                this.CheckOrientation();
            },
            /*OrientationManager.Start end.*/

            /*OrientationManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "OrientationManager#Update", this ); }

                if ((UnityEngine.Screen.width > UnityEngine.Screen.height && this.isPortrait) || (UnityEngine.Screen.width < UnityEngine.Screen.height && !this.isPortrait)) {
                    this.CheckOrientation();
                }
            },
            /*OrientationManager.Update end.*/

            /*OrientationManager.CheckOrientation start.*/
            CheckOrientation: function () {
if ( TRACE ) { TRACE( "OrientationManager#CheckOrientation", this ); }

                this.isPortrait = UnityEngine.Screen.height >= UnityEngine.Screen.width;

                if (this.isPortrait) {
                    this["portraitUI"].SetActive(true);
                    this["landscapeUI"].SetActive(false);
                    Luna.Unity.Analytics.LogEvent$1("PortraitMode", 1);
                } else {
                    this["portraitUI"].SetActive(false);
                    this["landscapeUI"].SetActive(true);
                    Luna.Unity.Analytics.LogEvent$1("Landscape", 0);
                }
            },
            /*OrientationManager.CheckOrientation end.*/


        }
    });
    /*OrientationManager end.*/

    /*Score start.*/
    Bridge.define("Score", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballY: null,
            portraitScoreText: null,
            landscapeScoreText: null,
            particleEffect: null,
            scoreSFX: null,
            maxScore: 0,
            currentScore: 0,
            scoredBalls: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Score#init", this ); }

                this.maxScore = 5;
                this.currentScore = 0;
                this.scoredBalls = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,System.Boolean)).ctor();
            }
        },
        methods: {
            /*Score.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Score#Start", this ); }

                this.UpdateScoreText();
            },
            /*Score.Start end.*/

            /*Score.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "Score#OnTriggerEnter2D", this ); }

                if (other.CompareTag("Ball") && other.transform.position.y > 1.4) {
                    if (!this.scoredBalls.containsKey(other.gameObject) || !this.scoredBalls.getItem(other.gameObject)) {
                        this.scoredBalls.setItem(other.gameObject, true);

                        if (this.currentScore < this.maxScore) {
                            UnityEngine.AudioSource.PlayClipAtPoint(this.scoreSFX, this.gameObject.transform.position);
                            this.particleEffect.Play();
                            this.currentScore = (this.currentScore + 1) | 0;
                            this.UpdateScoreText();
                        }
                    }
                }
            },
            /*Score.OnTriggerEnter2D end.*/

            /*Score.ResetBallState start.*/
            ResetBallState: function (ball) {
if ( TRACE ) { TRACE( "Score#ResetBallState", this ); }

                if (this.scoredBalls.containsKey(ball)) {
                    this.scoredBalls.setItem(ball, false);
                }
            },
            /*Score.ResetBallState end.*/

            /*Score.UpdateScoreText start.*/
            UpdateScoreText: function () {
if ( TRACE ) { TRACE( "Score#UpdateScoreText", this ); }

                var textValue = this.currentScore + "/" + this.maxScore;

                if (UnityEngine.MonoBehaviour.op_Inequality(this.portraitScoreText, null)) {
                    this.portraitScoreText.text = textValue;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.landscapeScoreText, null)) {
                    this.landscapeScoreText.text = textValue;
                }
            },
            /*Score.UpdateScoreText end.*/


        }
    });
    /*Score end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections","UnityEngine","System","UnityEngine.UI","System.Collections.Generic"];

    /*AnimateHoop start.*/
    $m("AnimateHoop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"sn":"Animate","rt":$n[0].IEnumerator},{"a":1,"n":"MoveBoth","t":8,"pi":[{"n":"t1","pt":$n[1].Transform,"ps":0},{"n":"t2","pt":$n[1].Transform,"ps":1},{"n":"targetX","pt":$n[2].Single,"ps":2},{"n":"duration","pt":$n[2].Single,"ps":3}],"sn":"MoveBoth","rt":$n[0].IEnumerator,"p":[$n[1].Transform,$n[1].Transform,$n[2].Single,$n[2].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[2].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"animateCo","t":4,"rt":$n[1].Coroutine,"sn":"animateCo"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":$n[1].Transform,"sn":"board"},{"a":1,"n":"moveRange","t":4,"rt":$n[2].Single,"sn":"moveRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"net","t":4,"rt":$n[1].Transform,"sn":"net"},{"a":1,"n":"timeRightToLeft","t":4,"rt":$n[2].Single,"sn":"timeRightToLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeToRight","t":4,"rt":$n[2].Single,"sn":"timeToRight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AnimateHoop end.*/

    /*BallSpawner start.*/
    $m("BallSpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AssignBall","t":8,"pi":[{"n":"ball","pt":$n[1].GameObject,"ps":0},{"n":"rb","pt":$n[1].Rigidbody2D,"ps":1},{"n":"drag","pt":DragThrow,"ps":2},{"n":"depth","pt":Depth,"ps":3}],"sn":"AssignBall","rt":$n[2].Void,"p":[$n[1].GameObject,$n[1].Rigidbody2D,DragThrow,Depth]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"IsOutOfView","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"IsOutOfView","rt":$n[2].Boolean,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Run","t":8,"sn":"Run","rt":$n[0].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"currentBall","t":4,"rt":$n[1].GameObject,"sn":"currentBall"},{"a":1,"n":"currentDepth","t":4,"rt":Depth,"sn":"currentDepth"},{"a":1,"n":"currentDragThrow","t":4,"rt":DragThrow,"sn":"currentDragThrow"},{"a":1,"n":"currentRb","t":4,"rt":$n[1].Rigidbody2D,"sn":"currentRb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstBall","t":4,"rt":$n[1].GameObject,"sn":"firstBall"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstBallDepth","t":4,"rt":Depth,"sn":"firstBallDepth"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstBallDragThrow","t":4,"rt":DragThrow,"sn":"firstBallDragThrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstBallRb","t":4,"rt":$n[1].Rigidbody2D,"sn":"firstBallRb"},{"a":1,"n":"maxResets","is":true,"t":4,"rt":$n[2].Int32,"sn":"maxResets","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"resetCount","t":4,"rt":$n[2].Int32,"sn":"resetCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"returnDelay","is":true,"t":4,"rt":$n[2].Single,"sn":"returnDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallSpawner end.*/

    /*ButtonScripts start.*/
    $m("ButtonScripts", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnInstallClicked","t":8,"sn":"OnInstallClicked","rt":$n[2].Void},{"a":2,"n":"TryAgainAndOnInstall","t":8,"sn":"TryAgainAndOnInstall","rt":$n[2].Void}]}; }, $n);
    /*ButtonScripts end.*/

    /*CameraBoundsColliders start.*/
    $m("CameraBoundsColliders", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"UpdateBounds","t":8,"sn":"UpdateBounds","rt":$n[2].Void},{"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":2,"n":"leftCollider","t":4,"rt":$n[1].BoxCollider2D,"sn":"leftCollider"},{"a":2,"n":"rightCollider","t":4,"rt":$n[1].BoxCollider2D,"sn":"rightCollider"},{"a":2,"n":"topCollider","t":4,"rt":$n[1].BoxCollider2D,"sn":"topCollider"}]}; }, $n);
    /*CameraBoundsColliders end.*/

    /*Depth start.*/
    $m("Depth", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[2].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[2].Void},{"a":2,"n":"ResetNetColliders","t":8,"sn":"ResetNetColliders","rt":$n[2].Void},{"a":2,"n":"ResetSortingOrder","t":8,"sn":"ResetSortingOrder","rt":$n[2].Void},{"a":1,"n":"SetNetColliders","t":8,"pi":[{"n":"enabled","pt":$n[2].Boolean,"ps":0}],"sn":"SetNetColliders","rt":$n[2].Void,"p":[$n[2].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"backOrder","t":4,"rt":$n[2].Int32,"sn":"backOrder","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ball","t":4,"rt":$n[1].SpriteRenderer,"sn":"ball"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballRb","t":4,"rt":$n[1].Rigidbody2D,"sn":"ballRb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"board","t":4,"rt":$n[1].SpriteRenderer,"sn":"board"},{"a":1,"n":"currentScale","t":4,"rt":$n[2].Single,"sn":"currentScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"forceColliderOff","t":4,"rt":$n[2].Boolean,"sn":"forceColliderOff","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"frontOrder","t":4,"rt":$n[2].Int32,"sn":"frontOrder","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxScale","t":4,"rt":$n[2].Single,"sn":"maxScale","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"maxY","t":4,"rt":$n[2].Single,"sn":"maxY","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"midOrder","t":4,"rt":$n[2].Int32,"sn":"midOrder","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"minScale","t":4,"rt":$n[2].Single,"sn":"minScale","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"minY","t":4,"rt":$n[2].Single,"sn":"minY","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"net","t":4,"rt":$n[1].SpriteRenderer,"sn":"net"},{"a":1,"n":"netColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"netColliders"},{"a":1,"n":"prevY","t":4,"rt":$n[2].Single,"sn":"prevY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Depth end.*/

    /*DragThrow start.*/
    $m("DragThrow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fail","t":8,"pi":[{"n":"pos","out":true,"pt":$n[1].Vector2,"ps":0}],"sn":"Fail","rt":$n[2].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ResetBall","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"ResetBall","rt":$n[2].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"TryGetPointer","t":8,"pi":[{"n":"began","out":true,"pt":$n[2].Boolean,"ps":0},{"n":"ended","out":true,"pt":$n[2].Boolean,"ps":1},{"n":"worldPos","out":true,"pt":$n[1].Vector2,"ps":2}],"sn":"TryGetPointer","rt":$n[2].Boolean,"p":[$n[2].Boolean,$n[2].Boolean,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[2].Void},{"a":2,"n":"arcBoost","t":4,"rt":$n[2].Single,"sn":"arcBoost","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"dragStart","t":4,"rt":$n[1].Vector2,"sn":"dragStart"},{"a":1,"n":"dragging","t":4,"rt":$n[2].Boolean,"sn":"dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"forceMultiplier","t":4,"rt":$n[2].Single,"sn":"forceMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxSpeed","t":4,"rt":$n[2].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minDragDist","t":4,"rt":$n[2].Single,"sn":"minDragDist","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":1,"n":"thrown","t":4,"rt":$n[2].Boolean,"sn":"thrown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"touchArea","t":4,"rt":$n[1].Collider2D,"sn":"touchArea"}]}; }, $n);
    /*DragThrow end.*/

    /*HandAnimation start.*/
    $m("HandAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateLoop","t":8,"sn":"AnimateLoop","rt":$n[0].IEnumerator},{"a":1,"n":"DestroyAfterFade","t":8,"sn":"DestroyAfterFade","rt":$n[0].IEnumerator},{"a":1,"n":"FadeToAlpha","t":8,"pi":[{"n":"targetAlpha","pt":$n[2].Single,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"FadeToAlpha","rt":$n[0].IEnumerator,"p":[$n[2].Single,$n[2].Single]},{"a":1,"n":"MoveLocalY","t":8,"pi":[{"n":"targetY","pt":$n[2].Single,"ps":0},{"n":"duration","pt":$n[2].Single,"ps":1}],"sn":"MoveLocalY","rt":$n[0].IEnumerator,"p":[$n[2].Single,$n[2].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":2,"n":"StopAndDestroy","t":8,"sn":"StopAndDestroy","rt":$n[2].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[2].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("End Y", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endY","t":4,"rt":$n[2].Single,"sn":"endY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Fade Duration", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[2].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isStopping","t":4,"rt":$n[2].Boolean,"sn":"isStopping","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"loopCo","t":4,"rt":$n[1].Coroutine,"sn":"loopCo"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Move Duration", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[2].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spriteRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"spriteRenderer"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Start Y", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startY","t":4,"rt":$n[2].Single,"sn":"startY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HandAnimation end.*/

    /*LevelFailManager start.*/
    $m("LevelFailManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckOrientationAndDoAction","t":8,"sn":"CheckOrientationAndDoAction","rt":$n[2].Void},{"a":1,"n":"FadeCanvas","t":8,"pi":[{"n":"cg","pt":$n[1].CanvasGroup,"ps":0},{"n":"targetAlpha","pt":$n[2].Single,"ps":1},{"n":"duration","pt":$n[2].Single,"ps":2}],"sn":"FadeCanvas","rt":$n[0].IEnumerator,"p":[$n[1].CanvasGroup,$n[2].Single,$n[2].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ball","t":4,"rt":$n[1].GameObject,"sn":"ball"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"content","t":4,"rt":$n[1].GameObject,"sn":"content"},{"a":1,"n":"hasFaded","t":4,"rt":$n[2].Boolean,"sn":"hasFaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"score","t":4,"rt":Score,"sn":"score"}]}; }, $n);
    /*LevelFailManager end.*/

    /*LevelUpManager start.*/
    $m("LevelUpManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckOrientationAndDoAction","t":8,"sn":"CheckOrientationAndDoAction","rt":$n[2].Void},{"a":1,"n":"FadeCanvas","t":8,"pi":[{"n":"cg","pt":$n[1].CanvasGroup,"ps":0},{"n":"targetAlpha","pt":$n[2].Single,"ps":1},{"n":"duration","pt":$n[2].Single,"ps":2}],"sn":"FadeCanvas","rt":$n[0].IEnumerator,"p":[$n[1].CanvasGroup,$n[2].Single,$n[2].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"content","t":4,"rt":$n[1].GameObject,"sn":"content"},{"a":1,"n":"hasFaded","t":4,"rt":$n[2].Boolean,"sn":"hasFaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"score","t":4,"rt":Score,"sn":"score"}]}; }, $n);
    /*LevelUpManager end.*/

    /*OrientationManager start.*/
    $m("OrientationManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckOrientation","t":8,"sn":"CheckOrientation","rt":$n[2].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[2].Void},{"a":1,"n":"isPortrait","t":4,"rt":$n[2].Boolean,"sn":"isPortrait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landscapeUI","t":4,"rt":$n[1].GameObject,"sn":"landscapeUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"portraitUI","t":4,"rt":$n[1].GameObject,"sn":"portraitUI"}]}; }, $n);
    /*OrientationManager end.*/

    /*Score start.*/
    $m("Score", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[2].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"ResetBallState","t":8,"pi":[{"n":"ball","pt":$n[1].GameObject,"ps":0}],"sn":"ResetBallState","rt":$n[2].Void,"p":[$n[1].GameObject]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[2].Void},{"a":1,"n":"UpdateScoreText","t":8,"sn":"UpdateScoreText","rt":$n[2].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballY","t":4,"rt":$n[1].Transform,"sn":"ballY"},{"a":2,"n":"currentScore","t":4,"rt":$n[2].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landscapeScoreText","t":4,"rt":$n[3].Text,"sn":"landscapeScoreText"},{"a":2,"n":"maxScore","t":4,"rt":$n[2].Int32,"sn":"maxScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"particleEffect","t":4,"rt":$n[1].ParticleSystem,"sn":"particleEffect"},{"at":[new UnityEngine.HeaderAttribute("Portrait ve Landscape UI Textler"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"portraitScoreText","t":4,"rt":$n[3].Text,"sn":"portraitScoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreSFX","t":4,"rt":$n[1].AudioClip,"sn":"scoreSFX"},{"a":1,"n":"scoredBalls","t":4,"rt":$n[4].Dictionary$2(UnityEngine.GameObject,System.Boolean),"sn":"scoredBalls"}]}; }, $n);
    /*Score end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
